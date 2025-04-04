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
    // Send email using the Fetch API
    const response = await fetch("https://formsubmit.co/ajax/krishnan.akshay.b@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        _subject: `Portfolio Contact: ${subject}`,
        _template: "table", // Use a nice table layout for the email
        _captcha: "false", // Disable captcha for better UX
      }),
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

