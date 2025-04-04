"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate form data
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required",
    }
  }

  try {
    // Send email using FormSubmit's standard endpoint
    const response = await fetch("https://formsubmit.co/akfskk2001@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name,
        email,
        subject,
        message,
        _subject: `Portfolio Contact: ${subject}`,
        _template: "table",
        _captcha: "false",
      }).toString(),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return {
      success: true,
      message: "Message sent successfully!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}

