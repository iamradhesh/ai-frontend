import { useState } from "react";
import { Paper, Card, CardContent, Typography, TextField, Button } from "@mui/material";

const AiChat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // API Key from .env file
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        }),
      });

      const data = await res.json();

      // Check if 'choices' exists and has at least one element
      if (data.choices && data.choices.length > 0) {
        setResponse(data.choices[0].message.content);
      } else {
        setResponse("No response from AI. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          AI Chat
        </Typography>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Type your message to AI"
          variant="outlined"
          multiline
          rows={5}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={sendMessage}
          disabled={loading}
          fullWidth
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </Paper>
      {response && (
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              AI Response:
            </Typography>
            <Typography variant="body1">
              {response}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AiChat;
