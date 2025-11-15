import React from "react";
import { View } from "react-native";
import { useToast } from "./toast";

export default function ToastProvider({ children }) {
  const toast = useToast();

  return (
    <View style={{ flex: 1 }}>
      {children}

      {/* Renderiza los toasts automáticamente */}
      {toast.toasts}
    </View>
  );
}
