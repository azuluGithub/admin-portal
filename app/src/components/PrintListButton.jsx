import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function printElementAsPdf(domElement, filename = "list.pdf") {
  const canvas = await html2canvas(domElement, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(filename);
}

export default function PrintListButton({ targetRef, filename }) {
  const handleClick = async () => {
    if (targetRef?.current) {
      await printElementAsPdf(targetRef.current, filename);
    }
  };
  return <button onClick={handleClick}>Print PDF</button>;
}
