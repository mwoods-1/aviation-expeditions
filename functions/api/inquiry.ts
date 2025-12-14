// Cloudflare Pages Function for flight inquiry form
export async function onRequestPost(context: any) {
  try {
    const body = await context.request.json();
    const { name, email, phone, tourType, preferredDate, passengers, experience, specialRequests } = body;

    // Map tour type values to full labels
    const tourLabels: Record<string, string> = {
      'gates': 'Gates of the Arctic National Park',
      'kobuk': 'Kobuk Valley National Park',
      'arctic-circle': 'Arctic Circle Flight',
      'denali': 'Denali Vista',
      'white-mountains': 'White Mountains & Hotsprings',
      'custom': 'Custom Adventure'
    };
    const tourLabel = tourLabels[tourType] || tourType;

    // Validate required fields
    if (!name || !email || !phone || !tourType || !passengers) {
      return new Response(JSON.stringify({ error: 'All required fields must be filled' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create email body
    const emailBody = `
New Flight Inquiry from Aviation Expeditions Website

Name: ${name}
Email: ${email}
Phone: ${phone}

Tour Type: ${tourLabel}
Preferred Date: ${preferredDate || 'Not specified'}
Number of Passengers: ${passengers}
Flying Experience: ${experience || 'Not specified'}

Special Requests:
${specialRequests || 'None'}

---
This email was sent from the flight inquiry form at aviationexpeditions.com
Reply directly to this email to respond to ${name} at ${email}
    `.trim();

    // Send email using Resend API
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const CONTACT_EMAIL = context.env.CONTACT_EMAIL || 'svenhaltmann@gmail.com';

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return new Response(
        JSON.stringify({
          error: 'Email service is not configured. Please contact Sven directly at svenhaltmann@gmail.com'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Aviation Expeditions <noreply@aviationexpeditions.com>',
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Flight Inquiry: ${tourLabel}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      return new Response(
        JSON.stringify({
          error: 'Failed to send email. Please try again or contact Sven directly at svenhaltmann@gmail.com'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);

    return new Response(
      JSON.stringify({ message: 'Inquiry sent successfully!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Inquiry form error:', error);
    return new Response(
      JSON.stringify({
        error: 'An unexpected error occurred. Please contact Sven directly at svenhaltmann@gmail.com'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
