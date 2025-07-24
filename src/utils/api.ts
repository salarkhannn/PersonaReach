import { env } from "process";

export async function sendEmailParams(linkedinUrl: string, purpose: string, senderName: string, receiverName: string, tone: string, context: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            linkedinUrl,
            purpose,
            senderName,
            receiverName,
            tone,
            context
        })
    });

    const result = await response.json();
    return result;
}