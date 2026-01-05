"use client";

import { useState, useEffect, useRef } from "react";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  label?: string;
}

export default function DatePicker({ value, onChange, label }: DatePickerProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());
  const [displayYear, setDisplayYear] = useState(new Date().getFullYear());
  const containerRef = useRef<HTMLDivElement>(null);

  // Format date string as MM/DD/YYYY
  const formatDateToString = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Parse MM/DD/YYYY string to Date
  const parseDateString = (str: string): Date | null => {
    if (!str) return null;
    const [month, day, year] = str.split("/").map(Number);
    if (!month || !day || !year) return null;
    return new Date(year, month - 1, day);
  };

  // Get number of days in a month
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Handle date selection
  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(displayYear, displayMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Don't allow selecting past dates
    if (selectedDate < today) {
      return;
    }

    onChange(formatDateToString(selectedDate));
    setShowCalendar(false);
  };

  // Handle month navigation
  const handlePrevMonth = () => {
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };

  // Handle "Today" button
  const handleToday = () => {
    const today = new Date();
    onChange(formatDateToString(today));
    setDisplayMonth(today.getMonth());
    setDisplayYear(today.getFullYear());
    setShowCalendar(false);
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showCalendar]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [showCalendar]);

  // Initialize calendar view when value changes
  useEffect(() => {
    if (value) {
      const date = parseDateString(value);
      if (date) {
        setDisplayMonth(date.getMonth());
        setDisplayYear(date.getFullYear());
      }
    }
  }, [value]);

  // Get calendar grid
  const daysInMonth = getDaysInMonth(displayMonth, displayYear);
  const firstDay = getFirstDayOfMonth(displayMonth, displayYear);
  const daysInPrevMonth = getDaysInMonth(
    displayMonth === 0 ? 11 : displayMonth - 1,
    displayMonth === 0 ? displayYear - 1 : displayYear
  );
  const days = [];

  // Previous month's days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
    });
  }

  // Current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
    });
  }

  // Next month's days
  const remainingDays = 42 - days.length; // 6 rows × 7 days
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
    });
  }

  const today = new Date();
  const selectedDate = value ? parseDateString(value) : null;

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      {label && (
        <label
          style={{
            display: "block",
            color: "#00d4ff",
            marginBottom: "0.5rem",
            fontWeight: "600",
          }}
        >
          {label}
        </label>
      )}

      {/* Input Field */}
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        style={{
          width: "100%",
          padding: "0.75rem",
          background: "rgba(15, 31, 53, 0.5)",
          border: "1px solid rgba(0, 212, 255, 0.15)",
          borderRadius: "6px",
          color: value ? "#f0f4f8" : "#a8b8cc",
          fontFamily: "inherit",
          fontSize: "1rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(0, 212, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(0, 212, 255, 0.15)";
        }}
      >
        <span>{value || "MM/DD/YYYY"}</span>
        <span style={{ fontSize: "1.2rem", color: "#00d4ff" }}>📅</span>
      </div>

      {/* Calendar Overlay */}
      {showCalendar && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 0.5rem)",
            left: 0,
            background: "rgba(15, 31, 53, 0.95)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            borderRadius: "8px",
            padding: "1.5rem",
            zIndex: 1000,
            minWidth: "360px",
            boxShadow: "0 20px 50px rgba(0, 212, 255, 0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Month/Year Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <button
              onClick={handlePrevMonth}
              style={{
                background: "none",
                border: "none",
                color: "#00d4ff",
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.25rem 0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              ←
            </button>
            <div
              style={{
                color: "#f0f4f8",
                fontSize: "1.1rem",
                fontWeight: "600",
                textAlign: "center",
                flex: 1,
              }}
            >
              {monthNames[displayMonth]} {displayYear}
            </div>
            <button
              onClick={handleNextMonth}
              style={{
                background: "none",
                border: "none",
                color: "#00d4ff",
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.25rem 0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              →
            </button>
          </div>

          {/* Day Names Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "0.25rem",
              marginBottom: "0.75rem",
            }}
          >
            {dayNames.map((dayName) => (
              <div
                key={dayName}
                style={{
                  textAlign: "center",
                  color: "#00d4ff",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  padding: "0.5rem 0",
                }}
              >
                {dayName}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "0.25rem",
              marginBottom: "1.5rem",
            }}
          >
            {days.map((dayObj, index) => {
              const isToday =
                dayObj.isCurrentMonth &&
                dayObj.day === today.getDate() &&
                displayMonth === today.getMonth() &&
                displayYear === today.getFullYear();

              const isSelected =
                dayObj.isCurrentMonth &&
                selectedDate &&
                dayObj.day === selectedDate.getDate() &&
                displayMonth === selectedDate.getMonth() &&
                displayYear === selectedDate.getFullYear();

              // Check if date is in the past
              const dateToCheck = new Date(displayYear, displayMonth, dayObj.day);
              const todayCheck = new Date();
              todayCheck.setHours(0, 0, 0, 0);
              const isPast = dayObj.isCurrentMonth && dateToCheck < todayCheck;

              return (
                <button
                  key={index}
                  onClick={() =>
                    dayObj.isCurrentMonth && !isPast && handleDateSelect(dayObj.day)
                  }
                  style={{
                    padding: "0.5rem 0",
                    background: isSelected
                      ? "#00d4ff"
                      : isToday
                        ? "rgba(0, 212, 255, 0.15)"
                        : isPast
                          ? "rgba(200, 0, 0, 0.05)"
                          : dayObj.isCurrentMonth
                            ? "rgba(255, 255, 255, 0.02)"
                            : "transparent",
                    border: isToday
                      ? "1px solid #ffa500"
                      : isPast
                        ? "1px solid rgba(200, 0, 0, 0.2)"
                        : "1px solid transparent",
                    borderRadius: "4px",
                    color: isSelected
                      ? "#0a1428"
                      : isPast
                        ? "#8a4f5f"
                        : dayObj.isCurrentMonth
                          ? "#f0f4f8"
                          : "#4a5f7f",
                    cursor: dayObj.isCurrentMonth && !isPast ? "pointer" : "not-allowed",
                    fontSize: "0.9rem",
                    fontWeight: dayObj.isCurrentMonth ? "500" : "400",
                    transition: "all 0.15s ease",
                    opacity: isPast ? 0.5 : 1,
                  }}
                  disabled={!dayObj.isCurrentMonth || isPast}
                  onMouseEnter={(e) => {
                    if (dayObj.isCurrentMonth && !isPast && !isSelected) {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(0, 212, 255, 0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (dayObj.isCurrentMonth && !isPast && !isSelected) {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255, 255, 255, 0.02)";
                    }
                  }}
                >
                  {dayObj.day}
                </button>
              );
            })}
          </div>

          {/* Today Button */}
          <button
            onClick={handleToday}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "linear-gradient(135deg, #00d4ff 0%, #00a8d4 100%)",
              color: "#0a1428",
              border: "none",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "0.9rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 10px 30px rgba(0, 212, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Today
          </button>
        </div>
      )}
    </div>
  );
}
