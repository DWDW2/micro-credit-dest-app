import PDFViewer from "@/components/PDFviewer";

const PrivacyPolicyPage = () => {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <PDFViewer pdfUrl="./Terms.pdf" />
    </div>
  );
};

export default PrivacyPolicyPage;
