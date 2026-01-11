"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  User,
  Mail,
  Building2,
  MessageSquare,
  CheckCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface BookingPopupProps {
  isOpen: boolean
  onClose: () => void
}

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

const consultationTypes = [
  {
    id: "discovery",
    label: "Discovery Call",
    duration: "30 min",
    description: "Initial consultation to understand your needs",
  },
  {
    id: "strategy",
    label: "Strategy Session",
    duration: "60 min",
    description: "Deep dive into your growth opportunities",
  },
  { id: "technical", label: "Technical Review", duration: "45 min", description: "Evaluate your current tech stack" },
]

export function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  const [step, setStep] = useState(1)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const day = date.getDay()
    return date < today || day === 0 || day === 6
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          consultationType: selectedType,
          date: selectedDate?.toISOString(),
          time: selectedTime,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to book consultation")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetAndClose = () => {
    setStep(1)
    setSelectedDate(null)
    setSelectedTime(null)
    setSelectedType(null)
    setFormData({ name: "", email: "", company: "", message: "" })
    setSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm" onClick={resetAndClose} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-lg font-bold text-white">Book a Consultation</h2>
              <p className="text-sm text-gray-400">Schedule a free strategy session with our team</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-800 bg-gray-900/50">
          <div className="flex items-center justify-center gap-4">
            {[
              { num: 1, label: "Type" },
              { num: 2, label: "Date & Time" },
              { num: 3, label: "Details" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                      step >= s.num
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                        : "bg-gray-800 text-gray-500",
                    )}
                  >
                    {submitted && s.num === 3 ? <CheckCircle className="w-4 h-4" /> : s.num}
                  </div>
                  <span className={cn("text-sm font-medium", step >= s.num ? "text-white" : "text-gray-500")}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && <div className={cn("w-12 h-0.5", step > s.num ? "bg-indigo-600" : "bg-gray-700")} />}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
              <p className="text-gray-400 mb-6">We've sent a confirmation email to {formData.email}</p>
              <div className="inline-flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800 border border-gray-700">
                <p className="text-sm text-gray-400">Your appointment</p>
                <p className="text-lg font-semibold text-white">{selectedDate && formatDate(selectedDate)}</p>
                <p className="text-indigo-400 font-medium">{selectedTime}</p>
              </div>
              <button
                onClick={resetAndClose}
                className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:shadow-lg transition-all"
              >
                Done
              </button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-6">Select Consultation Type</h3>
              {consultationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={cn(
                    "w-full p-6 rounded-xl border-2 text-left transition-all",
                    selectedType === type.id
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-gray-700 bg-gray-800/50 hover:border-gray-600",
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{type.label}</h4>
                      <p className="text-gray-400 text-sm">{type.description}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-sm">
                      <Clock className="w-4 h-4" />
                      {type.duration}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : step === 2 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-400" />
                    Select Date
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-400" />
                    </button>
                    <span className="text-white font-medium min-w-[140px] text-center">
                      {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </span>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentMonth).map((date, i) => (
                    <div key={i} className="aspect-square">
                      {date ? (
                        <button
                          onClick={() => !isDateDisabled(date) && setSelectedDate(date)}
                          disabled={isDateDisabled(date)}
                          className={cn(
                            "w-full h-full rounded-lg text-sm font-medium transition-all",
                            isDateDisabled(date)
                              ? "text-gray-600 cursor-not-allowed"
                              : selectedDate?.toDateString() === date.toDateString()
                                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                                : "text-gray-300 hover:bg-gray-800",
                          )}
                        >
                          {date.getDate()}
                        </button>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-indigo-400" />
                  Select Time
                </h3>
                {selectedDate ? (
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                          selectedTime === time
                            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700",
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-48 rounded-xl bg-gray-800/50 border border-gray-700 border-dashed">
                    <p className="text-gray-500">Select a date first</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-6">Your Details</h3>
              {error && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                <textarea
                  placeholder="Tell us about your project or goals..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Summary */}
              <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Booking Summary</h4>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    {selectedDate && formatDate(selectedDate)}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    {selectedTime}
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800 bg-gray-900/80">
            <button
              onClick={() => step > 1 && setStep(step - 1)}
              className={cn(
                "px-6 py-2 rounded-lg font-medium transition-all",
                step > 1 ? "bg-gray-800 text-white hover:bg-gray-700" : "invisible",
              )}
            >
              Back
            </button>
            <button
              onClick={() => {
                if (step === 1 && selectedType) setStep(2)
                else if (step === 2 && selectedDate && selectedTime) setStep(3)
              }}
              disabled={
                isSubmitting ||
                (step === 1 && !selectedType) ||
                (step === 2 && (!selectedDate || !selectedTime))
              }
              className={cn(
                "px-6 py-2 rounded-lg font-semibold transition-all",
                (step === 1 && selectedType) || (step === 2 && selectedDate && selectedTime) || step === 3
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg disabled:opacity-50"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed",
              )}
              type={step === 3 ? "submit" : "button"}
              form={step === 3 ? "booking-form" : undefined}
            >
              {step === 3 ? (isSubmitting ? "Booking..." : "Confirm Booking") : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
