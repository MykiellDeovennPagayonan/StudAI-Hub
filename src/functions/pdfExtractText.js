import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function pdfExtractText(file) {
  if (!file) {
    return
  }
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const data = new Uint8Array(reader.result);
      const pdf = await pdfjs.getDocument(data).promise;
      let text = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const pageContent = await page.getTextContent();
        text += pageContent.items.map((item) => item.str).join('');
      }
      resolve(text);
    };
    reader.readAsArrayBuffer(file);
  })
}