/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from "react";
import { Upload, X, FileImage } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileSelect?: (file: File | null) => void;
  accept?: string;
  maxSize?: number; // in bytes
  className?: string;
  error?: string;
}

export function FileUpload({
  onFileSelect,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
  error,
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (file.size > maxSize) {
        return;
      }

      setFileName(file.name);
      onFileSelect?.(file);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [maxSize, onFileSelect],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFile(files[0]);
      }
    },
    [handleFile],
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        handleFile(files[0]);
      }
    },
    [handleFile],
  );

  const clearFile = useCallback(() => {
    setPreview(null);
    setFileName(null);
    onFileSelect?.(null);
  }, [onFileSelect]);

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-6 transition-all duration-300",
          isDragOver ? "border-blue-900 bg-white/5" : "border-gray-400",
          error ? "border-red-900 bg-red-50" : "",
          preview ? "border-green-900 bg-white/5" : "",
        )}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
      >
        <input
          type="file"
          accept={accept}
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {preview ? (
          <div className="space-y-4">
            <div className="relative flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="max-w-full max-h-40 sm:max-h-48 object-contain rounded-xl shadow-md"
              />
              <button
                type="button"
                onClick={clearFile}
                className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-colors shadow-lg"
              >
                <X size={14} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <FileImage size={18} />
              <span className="text-sm font-medium truncate">{fileName}</span>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div
              className="mx-auto w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center"
            >
              <Upload
                size={24}
                className={cn(
                  "transition-colors",
                  isDragOver ? "text-blue-500" : "text-gray-400",
                )}
              />
            </div>

            <div className="space-y-2">
              <p
                className={cn(
                  "font-medium transition-colors",
                  isDragOver ? "text-blue-600" : "text-gray-300",
                )}
              >
                {isDragOver
                  ? "Suelta el archivo aquí"
                  : "Sube tu comprobante de pago"}
              </p>
              <p className="text-sm text-gray-400">
                Arrastra y suelta o haz clic para seleccionar
              </p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
