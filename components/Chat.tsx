"use client";

import { useChat } from "ai/react";

// TODO UX改善のためにStreamを実装する
// TODO ログイン機能を作って、ログインユーザーとエピソードで、チャット履歴を閲覧できるようにする
// TODO チャット削除機能
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div>
      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
