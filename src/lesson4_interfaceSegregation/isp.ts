// interface DocumentManager {
//     openDoc(): void;
//     closeDoc(): void;
//     saveDoc(): void;
//     scanDoc(): void;
// }

interface DocOpener {
    openDoc(): void;
}

interface DocCloser {
    closeDoc(): void;
}

interface DocSaver {
    saveDoc(): void;
}

interface DocScanner {
    scanDoc(): void;
}

class BasicEditor implements DocOpener, DocCloser, DocSaver {
    openDoc(): void {
        console.log("open Document ");
    }
    closeDoc(): void {
        console.log("close Document");

    }
    saveDoc(): void {
        console.log("save Document");

    }
    // scanDoc(): void {
    //     console.log("Don't do anything");

    // }

}

class AdvancedEditor implements DocOpener, DocCloser, DocSaver, DocScanner {
    openDoc(): void {
        console.log("AdvancedEditor: Document opened.");
    }
    closeDoc(): void {
        console.log("AdvancedEditor: Document closed.");
    }
    saveDoc(): void {
        console.log("AdvancedEditor: Document saved.");
    }
    scanDoc(): void {
        console.log("AdvancedEditor: Document scanned.");
    }
}


// 4th Principle: Interface Segregation Principle (ISP)
// this principle states that no client should be forced to depend on methods it does not use. In other words, interfaces should be specific to the clients that use them, rather than being general-purpose interfaces that include methods that some clients may not need.
// In this example, we have a DocumentManager interface that has four methods: openDoc, closeDoc, saveDoc, and scanDoc. The BasicEditor class implements this interface, but it does not need the scanDoc method. This violates the Interface Segregation Principle because BasicEditor is forced to implement a method it does not use.
// To fix this, we can create separate interfaces for each method and have BasicEditor implement only the methods it needs. This way, we can ensure that clients are not forced to depend on methods they do not use.
