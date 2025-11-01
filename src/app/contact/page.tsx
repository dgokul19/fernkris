// ...existing code...
"use client";

import React, { useState } from "react";
import NavbarComponent from "@/app/components/Navbar";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
// ...existing code...

export default function ContactPage() {
    // Form state
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    // Validation errors
    const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

    // Submission/success state
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Simple validators
    const validators: Record<string, (v: string) => string | null> = {
        name: (v: string) => v.trim() ? null : "Name is required.",
        phone: (v: string) => {
            const digits = v.replace(/\D/g, "");
            if (!digits) return "Phone is required.";
            // Accept singapore numbers (8 digits) or with country code
            if (digits.length < 8) return "Enter a valid phone number (at least 8 digits).";
            return null;
        },
        email: (v: string) => {
            if (!v.trim()) return "Email is required.";
            // simple email regex
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(v) ? null : "Enter a valid email address.";
        },
        message: (v: string) => v.trim().length >= 10 ? null : "Message must be at least 10 characters."
    };

    function validateField<K extends keyof typeof form>(field: K, value: string) {
        const validator = validators[field as string];
        const error = validator ? validator(value) : null;
        setErrors(prev => ({ ...prev, [field]: error || undefined }));
        return error;
    }

    function validateAll() {
        const newErrors: Partial<Record<keyof typeof form, string>> = {};
        (Object.keys(form) as (keyof typeof form)[]).forEach(key => {
            const err = validators[key as string]?.(form[key]) || null;
            if (err) newErrors[key] = err;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { id, value } = e.target;
        setForm(prev => ({ ...prev, [id]: value }));
        // immediate field-level validation
        validateField(id as keyof typeof form, value);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(false);

        // if (!validateAll()) {
        //     // focus first invalid field if possible
        //     const firstError = Object.keys(errors)[0] || Object.keys(form).find(k => validators[k]?.(form[k as keyof typeof form]));
        //     if (firstError) {
        //         const el = document.getElementById(firstError);
        //         el?.focus();
        //     }
        //     return;
        // }

        setSubmitting(true);
        try {
            console.log("Submitting form", form);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to send");

            setSubmitting(false);
            setSubmitted(true);
            setForm({ name: "", phone: "", email: "", message: "" });
            setErrors({});
        } catch (err: any) {
            setSubmitted(false);
            setSubmitting(false);
            alert(err.message || "Error sending message");
        }
    }

    return (
        <main>
            <NavbarComponent />
            <PageBanner title={`Contacts`} />
            {/* <!-- Contact Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="mb-5">Have Any Query? <span className="text-uppercase text-primary bg-light px-2">Contact
                            Us</span></h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <p className="text-center mb-4">The contact form is currently inactive.</p>

                            {submitted && (
                                <div className="alert alert-success" role="alert">
                                    Message sent successfully.
                                </div>
                            )}

                            <div className="wow fadeIn" data-wow-delay="0.3s">
                                <form noValidate onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                                    id="name"
                                                    placeholder="Your Name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    aria-invalid={!!errors.name}
                                                    aria-describedby={errors.name ? "name-error" : undefined}
                                                />
                                                <label htmlFor="name">Your Name</label>
                                                {errors.name && <div id="name-error" className="invalid-feedback">{errors.name}</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                                    id="phone"
                                                    placeholder="Phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    aria-invalid={!!errors.phone}
                                                    aria-describedby={errors.phone ? "phone-error" : undefined}
                                                />
                                                <label htmlFor="phone">Phone</label>
                                                {errors.phone && <div id="phone-error" className="invalid-feedback">{errors.phone}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                                    id="email"
                                                    placeholder="Your Email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    aria-invalid={!!errors.email}
                                                    aria-describedby={errors.email ? "email-error" : undefined}
                                                />
                                                <label htmlFor="email">Your Email</label>
                                                {errors.email && <div id="email-error" className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: '150px' }}
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    aria-invalid={!!errors.message}
                                                    aria-describedby={errors.message ? "message-error" : undefined}
                                                ></textarea>
                                                <label htmlFor="message">Message</label>
                                                {errors.message && <div id="message-error" className="invalid-feedback">{errors.message}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit" disabled={submitting}>
                                                {submitting ? "Sending..." : "Send Message"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

            <Footer />
        </main>
    );
}
// ...existing code...