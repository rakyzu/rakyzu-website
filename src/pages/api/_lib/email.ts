import { getEmail } from "./db";

export async function sendNotification(
  name: string,
  email: string,
  message: string,
): Promise<boolean> {
  try {
    const emailBinding = getEmail();
    if (!emailBinding) return false;

    await emailBinding.send({
      to: "rakyzu@rakyzu.my.id",
      from: { email: "noreply@rakyzu.my.id", name: "Portfolio Contact" },
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
      text: `From: ${name} (${email})\n\n${message}`,
    });
    return true;
  } catch {
    return false;
  }
}
