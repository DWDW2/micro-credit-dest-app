import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom styles for headings
    h1: ({ children }) => (
      <h1
        style={{
          color: "#4A90E2",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: "#333",
          fontSize: "2rem",
          borderBottom: "2px solid #4A90E2",
          paddingBottom: "0.5rem",
          marginTop: "2rem",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{ color: "#4A90E2", fontSize: "1.75rem", marginBottom: "1rem" }}
      >
        {children}
      </h3>
    ),

    // Custom style for paragraphs
    p: ({ children }) => (
      <p
        style={{
          lineHeight: "1.6",
          fontSize: "1.1rem",
          color: "#555",
          marginBottom: "1rem",
        }}
      >
        {children}
      </p>
    ),

    // Custom style for blockquotes
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #4A90E2",
          paddingLeft: "1rem",
          fontStyle: "italic",
          color: "#666",
          margin: "1rem 0",
        }}
      >
        {children}
      </blockquote>
    ),

    // Custom style for lists
    ul: ({ children }) => (
      <ul
        style={{ listStyleType: "disc", marginLeft: "1.5rem", color: "#555" }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        style={{
          listStyleType: "decimal",
          marginLeft: "1.5rem",
          color: "#555",
        }}
      >
        {children}
      </ol>
    ),

    // Custom style for links
    a: ({ href, children }) => (
      <a
        href={href}
        style={{ color: "#4A90E2", textDecoration: "none", fontWeight: "bold" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Custom style for inline code blocks
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: "#f5f5f5",
          padding: "0.2rem 0.4rem",
          borderRadius: "4px",
          color: "#d6336c",
          fontFamily: "monospace",
          fontSize: "0.9rem",
        }}
      >
        {children}
      </code>
    ),

    // Custom style for preformatted code blocks
    pre: ({ children }) => (
      <pre
        style={{
          backgroundColor: "#282c34",
          color: "#ffffff",
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
        {children}
      </pre>
    ),

    // Custom style for images
    img: (props) => (
      <Image
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
