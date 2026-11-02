/**
 * LA BIBLIOTHÈQUE ENCHANTÉE: BELLE'S LITERARY ENCHANTED JOURNEY (v1-belle-enchanted)
 * Refactored with Private Class Fields (#) and Encapsulation-Enchanted refractor
 */

const LIBRARY_VERSION = 'v1-belle-enchanted';

// --- Book Class with Private Fields (#) ---
class Book {
    #id;
    #title;
    #author;
    #shelf;
    #status;
    #notes;

    constructor(id, title, author, shelf, status, notes) {
        this.#id = id || generateId();
        this.#title = title;
        this.#author = author;
        this.#shelf = shelf;
        this.#status = status || 'beastly-read'; // 'beastly-read' or 'beastly-reading'
        this.#notes = notes || '';
    }

    // Public Getters to securely read private properties
    get id() { return this.#id; }
    get title() { return this.#title; }
    get author() { return this.#author; }
    get shelf() { return this.#shelf; }
    get status() { return this.#status; }
    get notes() { return this.#notes; }

    toggleRead() {
        this.#status = this.#status === 'beastly-read' ? 'beastly-reading' : 'beastly-read';
    }

    // Custom serializer so JSON.stringify can safely read private fields for localStorage
    toJSON() {
        return {
            id: this.#id,
            title: this.#title,
            author: this.#author,
            shelf: this.#shelf,
            status: this.#status,
            notes: this.#notes
        };
    }
}

// --- Enchanted Library Management Class with Private State ---
class EnchantedLibrary {
    #version;
    #books;

    constructor(version) {
        this.#version = version;
        this.#books = [];
    }

    get books() {
        return this.#books;
    }

    load() {
        const savedVersion = localStorage.getItem('belle_library_version');
        const savedData = localStorage.getItem('belleLibrary');

        if (savedVersion !== this.#version || !savedData) {
            this.initSeedData();
        } else {
            try {
                const parsed = JSON.parse(savedData);
                // Re-hydrate plain objects back into Book class instances
                this.#books = parsed.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes));
            } catch (e) {
                this.initSeedData();
            }
        }
    }

    initSeedData() {
        this.#books = rawSeedData.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes));
        this.save();
    }

    save() {
        localStorage.setItem('belleLibrary', JSON.stringify(this.#books));
        localStorage.setItem('belle_library_version', this.#version);
    }

    addBook(book) {
        this.#books.unshift(book);
        this.save();
    }

    removeBook(id) {
        this.#books = this.#books.filter(book => book.id !== id);
        this.save();
    }

    toggleBookStatus(id) {
        const book = this.#books.find(b => b.id === id);
        if (book) {
            book.toggleRead();
            this.save();
        }
    }

    exportArchives() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.#books, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "belle-enchanted-library-archives.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }
}

// Instantiate our Private-State Library Controller
const myLibrary = new EnchantedLibrary(LIBRARY_VERSION);

// --- Safe ID Fallback Engine ---
function generateId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        try {
            return crypto.randomUUID();
        } catch (e) {}
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// --- Belle's Complete Master Seed Collection ---
const rawSeedData = [
    {
        id: generateId(),
        title: "La Belle au bois dormant (Sleeping Beauty)",
        author: "Charles Perrault",
        shelf: "French Fairy Tales",
        status: "beastly-read",
        notes: "The classic tale of a princess asleep in a briar-choked castle, waiting for a century to turn."
    },
    {
        id: generateId(),
        title: "La Belle et la Bête",
        author: "Madame Gabrielle-Suzanne Barbot de Villeneuve",
        shelf: "French Fairy Tales",
        status: "beastly-read",
        notes: "The original, sprawling 1740 literary fairy tale exploring the true nature of inner monstrosity and grace."
    },
    {
        id: generateId(),
        title: "Contes de ma mère l'Oye (Mother Goose Tales)",
        author: "Charles Perrault",
        shelf: "French Fairy Tales",
        status: "beastly-read",
        notes: "The 1697 collection that birthed Perrault's immortal folkloric universe of glass slippers and wicked stepmothers."
    },
    {
        id: generateId(),
        title: "Cendrillon & Le Petit Chaperon Rouge",
        author: "Charles Perrault",
        shelf: "French Fairy Tales",
        status: "beastly-read",
        notes: "Timeless parables of wit, caution, and discovering one's true fortune against all odds."
    },
    {
        id: generateId(),
        title: "Blue Beard (La Barbe bleue)",
        author: "Charles Perrault",
        shelf: "French Fairy Tales",
        status: "beastly-read",
        notes: "A dark cautionary tale of forbidden curiosity, locked chambers, and the keys that reveal hidden truths."
    },
    {
        id: generateId(),
        title: "The Odyssey",
        author: "Homer",
        shelf: "High Fantasy",
        status: "beastly-read",
        notes: "The ultimate journey across wine-dark seas, battling sirens, cyclops, and longing for home."
    },
    {
        id: generateId(),
        title: "The Once and Future King",
        author: "T.H. White",
        shelf: "High Fantasy",
        status: "beastly-read",
        notes: "A bittersweet epic of Arthurian chivalry, magic, and the tragic dream of a just world."
    },
    {
        id: generateId(),
        title: "Phantastes: A Faerie Romance",
        author: "George MacDonald",
        shelf: "High Fantasy",
        status: "beastly-read",
        notes: "A dreamlike, haunting portal into Shadowland where every tree hides a spirit and every choice echoes."
    },
    {
        id: generateId(),
        title: "The Princess and the Goblin",
        author: "George MacDonald",
        shelf: "High Fantasy",
        status: "beastly-reading",
        notes: "A subterranean fairy tale of silver threads, brave miners, and creatures living beneath the mountains."
    },
    {
        id: generateId(),
        title: "Orlando Furioso",
        author: "Ludovico Ariosto",
        shelf: "High Fantasy",
        status: "beastly-read",
        notes: "A sprawling Renaissance epic of knights, flying hippogriffs, enchanted palaces, and madness born of love."
    },
    {
        id: generateId(),
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        shelf: "Plot Twists",
        status: "beastly-read",
        notes: "A masterclass in patience, disguise, and meticulous, calculated retribution across the Mediterranean."
    },
    {
        id: generateId(),
        title: "The Phantom of the Opera",
        author: "Gaston Leroux",
        shelf: "Plot Twists",
        status: "beastly-read",
        notes: "Beneath the Paris Opera House lies a world of music, obsession, and tragic architecture."
    },
    {
        id: generateId(),
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        shelf: "Plot Twists",
        status: "beastly-read",
        notes: "A breathless web of political intrigue, royal secrets, diamond studs, and 'All for one, one for all.'"
    },
    {
        id: generateId(),
        title: "The Woman in White",
        author: "Wilkie Collins",
        shelf: "Plot Twists",
        status: "beastly-reading",
        notes: "A Victorian labyrinth of swapped identities, gaslighting, and shocking archival revelations."
    },
    {
        id: generateId(),
        title: "Les Misérables",
        author: "Victor Hugo",
        shelf: "Plot Twists",
        status: "beastly-read",
        notes: "A monumental cathedral of a novel exploring redemption, revolution, and the unrelenting shadow of law."
    },
    {
        id: generateId(),
        title: "Candide, ou l'Optimisme",
        author: "Voltaire",
        shelf: "Philosophical Tomes",
        status: "beastly-read",
        notes: "A biting satirical masterpiece tearing down naive optimism in favor of cultivating our own gardens."
    },
    {
        id: generateId(),
        title: "Les Pensées",
        author: "Blaise Pascal",
        shelf: "Philosophical Tomes",
        status: "beastly-read",
        notes: "Brilliant, fractured fragments on human wretchedness, grandeur, and the reasons of the heart."
    },
    {
        id: generateId(),
        title: "The Little Prince (Le Petit Prince)",
        author: "Antoine de Saint-Exupéry",
        shelf: "Philosophical Tomes",
        status: "beastly-read",
        notes: "'One sees clearly only with the heart. What is essential is invisible to the eye.' A timeless mirror for the soul."
    },
    {
        id: generateId(),
        title: "Meditations on First Philosophy",
        author: "René Descartes",
        shelf: "Philosophical Tomes",
        status: "beastly-read",
        notes: "'Cogito, ergo sum.' Stripping away all illusions to find the undeniable core of human consciousness."
    },
    {
        id: generateId(),
        title: "The Social Contract (Du contrat social)",
        author: "Jean-Jacques Rousseau",
        shelf: "Philosophical Tomes",
        status: "beastly-reading",
        notes: "Exploring freedom, civil society, and the innate rights of man against tyrannical governance."
    },
    {
        id: generateId(),
        title: "Aesop's Fables (Illustrated Edition)",
        author: "Aesop",
        shelf: "Teaching the Prince to Read",
        status: "beastly-read",
        notes: "The first book they tackled together on the library floor—simple sentences, animal wisdom, and patience."
    },
    {
        id: generateId(),
        title: "King Arthur and the Knights of the Round Table",
        author: "Sir Thomas Malory (Adapted)",
        shelf: "Teaching the Prince to Read",
        status: "beastly-read",
        notes: "The stories he struggled to sound out aloud until his deep voice found its rhythm again under her guidance."
    },
    {
        id: generateId(),
        title: "Elementary French Poetry & Rhymes",
        author: "Anthology of the Realm",
        shelf: "Teaching the Prince to Read",
        status: "beastly-read",
        notes: "Used to practice cadence, vowel sounds, and poetic meter during quiet afternoons by the hearth."
    },
    {
        id: generateId(),
        title: "Lancelot, the Knight of the Cart",
        author: "Chrétien de Troyes",
        shelf: "Shared While Cursed",
        status: "beastly-read",
        notes: "Read aloud by candlelight in the shadow of the enchanted rose—proving love transcends all curses."
    },
    {
        id: generateId(),
        title: "Tristan and Iseult",
        author: "Medieval Legend",
        shelf: "Shared While Cursed",
        status: "beastly-read",
        notes: "A tale of a love potion, forbidden devotion, and sorrow that mirrored their own trapped existence in the castle."
    },
    {
        id: generateId(),
        title: "The Fables of La Fontaine",
        author: "Jean de la Fontaine",
        shelf: "Shared While Cursed",
        status: "beastly-read",
        notes: "Examined together, laughing at human folly while the enchanted clocks and teacups chimed around them."
    },
    {
        id: generateId(),
        title: "The Secret Garden of Versailles",
        author: "Royal Botanists",
        shelf: "Shared After the Spell",
        status: "beastly-read",
        notes: "Studied together on the sunlit terrace as the snow melted and the castle blossomed back into life."
    },
    {
        id: generateId(),
        title: "A History of European Architecture & Cathedral Design",
        author: "Master Builders of France",
        shelf: "Shared After the Spell",
        status: "beastly-read",
        notes: "Examining how high arches and stained glass let the light back into dark places."
    },
    {
        id: generateId(),
        title: "The Royal Code of Jurisprudence & Compassion",
        author: "Crown Council & Royal Scholars",
        shelf: "Read After Marriage",
        status: "beastly-reading",
        notes: "Annotated together in the margins—laws rewritten to ensure schools, libraries, and kindness reach every village."
    },
    {
        id: generateId(),
        title: "Atlas of the Great World & Uncharted Seas",
        author: "Royal Cartographers",
        shelf: "Read After Marriage",
        status: "beastly-read",
        notes: "Planning all the distant places they will finally travel to together now that they are free."
    },
    {
        id: generateId(),
        title: "The Complete Book of Fairy Tales Retold",
        author: "Queen Belle & King Adam",
        shelf: "Read After Marriage",
        status: "beastly-read",
        notes: "Their own personal manuscript, written in their combined handwriting, recording how every dark chapter always ends in light."
    }
];

// --- Initialization & Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    myLibrary.load();
    initPortalEngine();
    initUIEventListeners();
    initScribeModal();
    initExportEngine();
    renderLibrary();
});

function initPortalEngine() {
    const portal = document.getElementById('threshold-portal');
    if (!portal) return;

    function shatterPortal() {
        portal.classList.add('shattered');
        setTimeout(() => portal.style.display = 'none', 800);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && portal.style.display !== 'none') {
            shatterPortal();
        }
    });

    portal.addEventListener('click', shatterPortal);
}

function initScribeModal() {
    const modal = document.getElementById('scribe-modal');
    const openBtn = document.getElementById('open-scribe-btn');
    const closeBtn = document.getElementById('close-scribe-btn');
    const form = document.getElementById('add-volume-form');

    if (!modal || !openBtn || !closeBtn || !form) return;

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('book-title').value.trim();
        const author = document.getElementById('book-author').value.trim();
        const shelf = document.getElementById('book-shelf').value;
        const status = document.getElementById('book-status').value;
        const notes = document.getElementById('book-notes').value.trim();

        if (title && author) {
            const newBook = new Book(generateId(), title, author, shelf, status, notes);
            myLibrary.addBook(newBook);
            renderLibrary();
            form.reset();
            modal.style.display = 'none';
        }
    });
}

function initExportEngine() {
    const exportBtn = document.getElementById('export-library-btn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', () => {
        myLibrary.exportArchives();
    });
}

function initUIEventListeners() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    libraryContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.book-card');
        if (!card) return;
        const bookId = card.dataset.id;

        if (e.target.classList.contains('delete-btn')) {
            myLibrary.removeBook(bookId);
            renderLibrary();
        } else if (e.target.classList.contains('status-btn')) {
            myLibrary.toggleBookStatus(bookId);
            renderLibrary();
        }
    });
}

function renderLibrary() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    libraryContainer.innerHTML = '';

    myLibrary.books.forEach(book => {
        const card = document.createElement('div');
        card.className = `book-card ${book.status}`;
        card.dataset.id = book.id;
        card.dataset.shelf = book.shelf;

        const isRead = book.status === 'beastly-read';

        card.innerHTML = `
            <div class="book-spine-accent"></div>
            <div class="book-content">
                <span class="book-shelf-tag">${escapeHTML(book.shelf)}</span>
                <h3 class="book-title">${escapeHTML(book.title)}</h3>
                <h4 class="book-author">by ${escapeHTML(book.author)}</h4>
                <p class="book-notes">${escapeHTML(book.notes)}</p>
                <div class="book-actions">
                    <button class="status-btn">${isRead ? '🥀 Beastly Read' : '📖 Beastly Reading'}</button>
                    <button class="delete-btn">🌹 Return to Shelf</button>
                </div>
            </div>
        `;
        libraryContainer.appendChild(card);
    });
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}