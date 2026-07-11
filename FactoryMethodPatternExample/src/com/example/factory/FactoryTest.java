package com.example.factory;

public class FactoryTest {
    public static void main(String[] args) {
        // Create factories
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Use factories to create documents
        Document wordDoc = wordFactory.createDocument();
        Document pdfDoc = pdfFactory.createDocument();
        Document excelDoc = excelFactory.createDocument();

        // Open documents
        wordDoc.open();
        pdfDoc.open();
        excelDoc.open();

        // Verify they are different types
        System.out.println("wordDoc is instance of: " + wordDoc.getClass().getSimpleName());
        System.out.println("pdfDoc is instance of: " + pdfDoc.getClass().getSimpleName());
        System.out.println("excelDoc is instance of: " + excelDoc.getClass().getSimpleName());
    }
}
