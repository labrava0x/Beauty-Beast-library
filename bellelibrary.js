/**
 * LA BIBLIOTHÈQUE ENCHANTÉE: BELLE'S LITERARY ENCHANTED JOURNEY (v1-belle-enchanted)
 * Complete object-oriented engine with local storage persistence and archive exports.
 */

const LIBRARY_VERSION = 'v1-belle-enchanted';

// Book Constructor
class Book {
    constructor(id, title, author, shelf, status, notes, pages) {
        this.id = id || generateId();
        this.title = title;
        this.author = author;
        this.shelf = shelf;
        this.status = status || 'beastly-read'; // 'beastly-read' or 'beastly-reading'
        this.notes = notes || '';
        if (typeof pages === 'number') {
            this.pages = pages;
        }
    }

    toggleRead() {
        this.status = this.status === 'beastly-read' ? 'beastly-reading' : 'beastly-read';
    }
}

// Safe ID Fallback Engine
function generateId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        try {
            return crypto.randomUUID();
        } catch {
            // Fallback if security context restricts randomUUID
        }
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.floor(Math.random() * 16);
        const v = c === 'x' ? r : ((r & 0x3) | 0x8);
        return v.toString(16);
    });
}

// Belle's Complete Master Seed Collection
const rawSeedData = [
    // --- 👑 French Fairy Tales & Folklore ---
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

    // --- ⚔️ High Fantasy & Epic Quests ---
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

    // --- 🎭 Famous Plot Twists & Deceptions ---
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

    // --- 🧠 Philosophical Tomes ---
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

    // --- 📖 Teaching the Prince to Read ---
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

    // --- 🥀 Shared While Cursed ---
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

    // --- ☀️ Shared After the Spell ---
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

    // --- 👑 Read After Marriage ---
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

let myLibrary = [];

function loadLibrary() {
    const savedVersion = localStorage.getItem('belle_library_version');
    const savedData = localStorage.getItem('belleLibrary');

    if (savedVersion !== LIBRARY_VERSION || !savedData) {
        myLibrary = rawSeedData.map((item) => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes, item.pages));
        saveLibrary();
    } else {
        try {
            const parsed = JSON.parse(savedData);
            myLibrary = parsed.map((item) => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes, item.pages));
        } catch {
            myLibrary = rawSeedData.map((item) => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes, item.pages));
            saveLibrary();
        }
    }
}

function saveLibrary() {
    localStorage.setItem('belleLibrary', JSON.stringify(myLibrary));
    localStorage.setItem('belle_library_version', LIBRARY_VERSION);
}

document.addEventListener('DOMContentLoaded', () => {
    loadLibrary();
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
        setTimeout(() => {
            portal.style.display = 'none';
        }, 800);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && portal.style.display !== 'none') {
            shatterPortal();
        }
    });

    portal.addEventListener('click', shatterPortal);
}

function getOrCreateErrorEl(input, preferredId) {
    if (preferredId) {
        const existing = document.getElementById(preferredId);
        if (existing) return existing;
    }
    const fallbackId = `${input.id}-error`;
    const fallback = document.getElementById(fallbackId);
    if (fallback) return fallback;

    const span = document.createElement('span');
    span.id = fallbackId;
    span.className = 'field-error';
    span.setAttribute('aria-live', 'polite');
    input.insertAdjacentElement('afterend', span);
    return span;
}

function setFieldValidation(input, errorEl, message) {
    input.setCustomValidity(message);
    if (errorEl) {
        errorEl.textContent = message;
    }
}

function validateBookTitle(titleInput, titleError) {
    const value = titleInput.value.trim();
    if (!value) {
        setFieldValidation(
            titleInput,
            titleError,
            "Ah, no title at all?! How can we welcome a guest when we do not even know its name? Give it a title, yes?"
        );
        return false;
    }
    setFieldValidation(titleInput, titleError, '');
    return true;
}

function validateBookAuthor(authorInput, authorError) {
    const value = authorInput.value.trim();
    if (!value) {
        setFieldValidation(
            authorInput,
            authorError,
            "And who wrote this, hmm? Tell me, who is behind all this?"
        );
        return false;
    }
    setFieldValidation(authorInput, authorError, '');
    return true;
}

function validateBookPages(pagesInput, pagesError) {
    const rawValue = pagesInput.value.trim();
    const pages = Number(rawValue);
    if (!rawValue || Number.isNaN(pages) || !Number.isInteger(pages) || pages < 1) {
        const message = (rawValue === '0' || pages === 0)
            ? "Zero pages?! Eh, what is this, a joke?! At least one page—come on, give us one!"
            : "Mon Dieu, what kind of number is that?! Give us a real whole number of pages—at least one, s'il vous plaît!";
        setFieldValidation(pagesInput, pagesError, message);
        return false;
    }
    setFieldValidation(pagesInput, pagesError, '');
    return true;
}

function initScribeModal() {
    const modal = document.getElementById('scribe-modal');
    const openBtn = document.getElementById('open-scribe-btn');
    const closeBtn = document.getElementById('close-scribe-btn');
    const form = document.getElementById('add-volume-form');

    if (!modal || !openBtn || !closeBtn || !form) return;

    const titleInput = document.getElementById('book-title');
    const authorInput = document.getElementById('book-author');
    const pagesInput = document.getElementById('book-pages') || document.getElementById('pages');

    const titleError = titleInput ? getOrCreateErrorEl(titleInput, 'title-error') : null;
    const authorError = authorInput ? getOrCreateErrorEl(authorInput, 'author-error') : null;
    const pagesError = pagesInput ? getOrCreateErrorEl(pagesInput, 'pages-error') : null;

    if (titleInput) {
        titleInput.addEventListener('input', () => validateBookTitle(titleInput, titleError));
    }
    if (authorInput) {
        authorInput.addEventListener('input', () => validateBookAuthor(authorInput, authorError));
    }
    if (pagesInput) {
        pagesInput.addEventListener('input', () => validateBookPages(pagesInput, pagesError));
    }

    openBtn.addEventListener('click', () => {
        if (titleInput && titleError) setFieldValidation(titleInput, titleError, '');
        if (authorInput && authorError) setFieldValidation(authorInput, authorError, '');
        if (pagesInput && pagesError) setFieldValidation(pagesInput, pagesError, '');
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

        const isTitleValid = titleInput ? validateBookTitle(titleInput, titleError) : true;
        const isAuthorValid = authorInput ? validateBookAuthor(authorInput, authorError) : true;
        const isPagesValid = pagesInput ? validateBookPages(pagesInput, pagesError) : true;

        if (!isTitleValid || !isAuthorValid || !isPagesValid) {
            form.reportValidity();
            return;
        }

        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const pages = pagesInput ? Number(pagesInput.value.trim()) : undefined;
        const shelf = document.getElementById('book-shelf').value;
        const status = document.getElementById('book-status').value;
        const notes = document.getElementById('book-notes').value.trim();

        const newBook = new Book(generateId(), title, author, shelf, status, notes, pages);
        myLibrary.unshift(newBook);
        saveLibrary();
        renderLibrary();
        form.reset();
        modal.style.display = 'none';

        console.log("Be my guest, you are at the library, avec plaisir, the library shall pleasure you to the fullest!!");
    });
}

function initExportEngine() {
    const exportBtn = document.getElementById('export-library-btn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(myLibrary, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "belle-enchanted-library-archives.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
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
            removeBook(bookId);
        } else if (e.target.classList.contains('status-btn')) {
            toggleBookStatus(bookId);
        }
    });
}

function removeBook(id) {
    myLibrary = myLibrary.filter((book) => book.id !== id);
    saveLibrary();
    renderLibrary();
}

function toggleBookStatus(id) {
    const book = myLibrary.find((b) => b.id === id);
    if (book) {
        book.toggleRead();
        saveLibrary();
        renderLibrary();
    }
}

function renderLibrary() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    libraryContainer.innerHTML = '';

    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.className = `book-card ${book.status}`;
        card.dataset.id = book.id;
        card.dataset.shelf = book.shelf;

        const isRead = book.status === 'beastly-read';
        const pagesLine = typeof book.pages === 'number' && !Number.isNaN(book.pages)
            ? `<p class="book-pages">${escapeHTML(String(book.pages))} pages</p>`
            : '';

        card.innerHTML = `
            <div class="book-spine-accent"></div>
            <div class="book-content">
                <span class="book-shelf-tag">${escapeHTML(book.shelf)}</span>
                <h3 class="book-title">${escapeHTML(book.title)}</h3>
                <h4 class="book-author">by ${escapeHTML(book.author)}</h4>
                ${pagesLine}
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
    const entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    };
    return String(str || '').replace(/[&<>'"]/g, (tag) => entityMap[tag] || tag);
}