// Run: bun run 6-adapter/index.ts

console.log("==================================")
console.log("Exerxice 6: Adapter Pattern")
console.log("==================================")

// Interface pour les documents
interface Document {
    contenu: string;
    dessine(): void;
    imprime(): void;
}

// Classe pour les documents HTML qui implémente l'interface Document
class DocumentHtml implements Document {
    protected _contenu: string = "";

    // Getter pour le contenu
    get contenu(): string {
        return this._contenu;
    }

    // Setter pour le contenu
    set contenu(value: string) {
        this._contenu = value;
    }

    // Méthode pour dessiner le document
    dessine(): void {
        console.log("Dessine document HTML : " + this.contenu);
    }

    // Méthode pour imprimer le document
    imprime(): void {
        console.log("Imprime document HTML : " + this.contenu);
    }
}

// Classe pour les documents PDF qui implémente l'interface Document
class ComposantPdf {
    protected contenu: string = "";

    // Méthode pour fixer le contenu
    pdfFixeContenu(contenu: string): void {
        this.contenu = contenu;
    }

    // Méthode pour préparer l'affichage
    pdfPrepareAffichage(): void {
        console.log("Affichage PDF : Début");
    }

    // Méthode pour rafraîchir le contenu
    pdfRafraichit(): void {
        console.log("Affichage contenu PDF : " + this.contenu);
    }

    // Méthode pour terminer l'affichage
    pdfTermineAffichage(): void {
        console.log("Affichage PDF : Fin");
    }

    // Méthode pour envoyer à l'imprimante
    pdfEnvoieImprimante(): void {
        console.log("Impression PDF : " + this.contenu);
    }
}

// Classe pour les documents PDF qui implémente l'interface Document
class DocumentPdfAdapter implements Document {
    private composantPdf: ComposantPdf = new ComposantPdf();
    private _contenu: string = "";

    // Getter pour le contenu
    get contenu(): string {
        return this._contenu;
    }

    // Setter pour le contenu
    set contenu(value: string) {
        this._contenu = value;
        this.composantPdf.pdfFixeContenu(value);
    }

    // Méthode pour dessiner le document
    dessine(): void {
        this.composantPdf.pdfPrepareAffichage();
        this.composantPdf.pdfRafraichit();
        this.composantPdf.pdfTermineAffichage();
    }

    // Méthode pour imprimer le document
    imprime(): void {
        this.composantPdf.pdfEnvoieImprimante();
    }
}

// Exemple d'utilisation

// Création d'un document HTML
let documentHtml: DocumentHtml = new DocumentHtml();

// Fixer le contenu du document HTML
documentHtml.contenu = "Hello, World!";

// Dessiner le document HTML
documentHtml.dessine(); // Dessine document HTML : Hello, World!

// Imprimer le document HTML
documentHtml.imprime(); // Imprime document HTML : Hello, World!

// Création d'un document PDF
let documentPdf: DocumentPdfAdapter = new DocumentPdfAdapter();

// Fixer le contenu du document PDF
documentPdf.contenu = "Bonjour, Monde!";

// Dessiner le document PDF
documentPdf.dessine();
// Affichage PDF : Début
// Affichage contenu PDF : Bonjour, Monde!
// Affichage PDF : Fin

// Imprimer le document PDF
documentPdf.imprime(); // Impression PDF : Bonjour, Monde!