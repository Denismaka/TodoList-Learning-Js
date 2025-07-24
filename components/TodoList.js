import { createElement } from "../functions/dom.js";

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

export class TodoList {
    /** @type {Todo[]} */
    #todos = [];

    /** @type {HTMLUListElement} */
    #listElement = [];

    /**
     * @param {Todo[]} todos
     */
    constructor(todos) {
        this.#todos = todos;
    }

    /**
     * @param {HTMLElement} element
     */
    appendTo(element) {
        element.innerHTML = `
        <form class="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
            <input 
                required 
                class="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 border border-primary-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base" 
                type="text" 
                placeholder="Ajouter une nouvelle tâche..." 
                name="title"
            >
            <button class="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium sm:font-semibold rounded-lg sm:rounded-xl hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span class="hidden sm:inline">Ajouter</span>
                <span class="sm:hidden">+</span>
            </button>
        </form>
        
        <main>
            <div class="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 filter">
                <button type="button" class="filter-button flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border border-primary-200 text-primary-700 font-medium hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 active text-xs sm:text-sm" data-filter="all">
                    Toutes
                </button>
                <button type="button" class="filter-button flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border border-primary-200 text-primary-700 font-medium hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 text-xs sm:text-sm" data-filter="todo">
                    À faire
                </button>
                <button type="button" class="filter-button flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border border-primary-200 text-primary-700 font-medium hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 text-xs sm:text-sm" data-filter="done">
                    Terminées
                </button>
            </div>

            <ul class="space-y-2 sm:space-y-3">
            </ul>
        </main>`;

        this.#listElement = element.querySelector("ul");
        for (let todo of this.#todos) {
            const t = new TodoListItem(todo);
            this.#listElement.append(t.element);
        }

        element
            .querySelector("form")
            .addEventListener("submit", (e) => this.#onSubmit(e));
        element.querySelectorAll(".filter-button").forEach((button) => {
            button.addEventListener("click", (e) => this.#toggleFilter(e));
        });
    }

    /**
     * @param {SubmitEvent} e
     */
    #onSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const title = new FormData(e.currentTarget)
            .get("title")
            .toString()
            .trim();
        if (title === "") {
            return;
        }
        const todo = {
            id: Date.now(),
            title,
            completed: false,
        };
        const item = new TodoListItem(todo);
        this.#listElement.prepend(item.element);
        form.reset();
    }

    /**
     * @param {PointerEvent} e
     */
    #toggleFilter(e) {
        e.preventDefault();
        const filter = e.currentTarget.getAttribute("data-filter");
        e.currentTarget.parentElement
            .querySelector(".active")
            .classList.remove("active");
        e.currentTarget.classList.add("active");
        if (filter === "todo") {
            this.#listElement.classList.add("hide-completed");
            this.#listElement.classList.remove("hide-todo");
        } else if (filter === "done") {
            this.#listElement.classList.add("hide-todo");
            this.#listElement.classList.remove("hide-completed");
        } else {
            this.#listElement.classList.remove("hide-todo");
            this.#listElement.classList.remove("hide-completed");
        }
    }
}

class TodoListItem {
    #element;

    /** @type {Todo} */
    constructor(todo) {
        const id = `todo-${todo.id}`;
        const li = createElement("li", {
            class: `todo todo-item bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 ${
                todo.completed ? "is-completed" : ""
            }`,
        });
        this.#element = li;

        const checkbox = createElement("input", {
            type: "checkbox",
            class: "todo-checkbox w-4 h-4 sm:w-5 sm:h-5 text-primary-500 bg-white border-primary-300 rounded focus:ring-primary-500 focus:ring-2 transition-all duration-300 flex-shrink-0",
            id,
            checked: todo.completed ? "" : null,
        });

        const label = createElement("label", {
            class: "todo-text flex-1 text-gray-800 font-medium cursor-pointer select-none text-sm sm:text-base break-words",
            for: id,
        });
        label.innerText = todo.title;

        const button = createElement("button", {
            class: "p-1.5 sm:p-2 text-gray-400 hover:text-danger-500 hover:bg-danger-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2 flex-shrink-0",
        });
        button.innerHTML = `
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
        `;

        li.append(checkbox);
        li.append(label);
        li.append(button);
        this.toggle(checkbox);

        button.addEventListener("click", (e) => this.remove(e));
        checkbox.addEventListener("change", (e) =>
            this.toggle(e.currentTarget)
        );
    }

    /**
     * @return {HTMLElement}
     */
    get element() {
        return this.#element;
    }

    /**
     * @param {PointEvent} e
     */
    remove(e) {
        e.preventDefault();
        this.#element.style.transform = "translateX(100%)";
        this.#element.style.opacity = "0";
        setTimeout(() => {
            this.#element.remove();
        }, 300);
    }

    /**
     * Change l'état (à faire / fait) de la tâche
     *
     * @param {HTMLInputElement} checkbox
     */
    toggle(checkbox) {
        if (checkbox.checked) {
            this.#element.classList.add("is-completed");
        } else {
            this.#element.classList.remove("is-completed");
        }
    }
}
