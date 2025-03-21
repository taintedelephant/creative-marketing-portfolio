import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the incoming request body
      const validatedData = insertMessageSchema.parse({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject || "",
        message: req.body.message,
      });

      // Add timestamp
      const messageData = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };

      // Store the message
      const message = await storage.createMessage(messageData);

      // Return success response
      return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      }

      console.error("Error submitting contact form:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
