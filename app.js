import { TodoList } from "./components/TodoList.js";
import { createElement } from "./functions/dom.js";

const localTodos = [
    {
        id: 1,
        title: "Faire les courses pour la semaine",
        completed: false,
    },
    {
        id: 2,
        title: "Appeler le médecin pour un rendez-vous",
        completed: true,
    },
    {
        id: 3,
        title: "Préparer la présentation pour le travail",
        completed: false,
    },
    {
        id: 4,
        title: "Réviser le code JavaScript",
        completed: false,
    },
    {
        id: 5,
        title: "Faire du sport - 30 minutes",
        completed: true,
    },
    {
        id: 6,
        title: "Lire un chapitre du livre",
        completed: false,
    },
    {
        id: 7,
        title: "Organiser le bureau",
        completed: false,
    },
    {
        id: 8,
        title: "Planifier les vacances d'été",
        completed: false,
    },
];

try {
    const list = new TodoList(localTodos);
    list.appendTo(document.querySelector("#todolist"));
} catch (e) {
    const alertElement = createElement("div", {
        class: "bg-danger-100 border border-danger-400 text-danger-700 px-4 py-3 rounded-xl mb-4 mx-4 backdrop-blur-sm",
        role: "alert",
    });
    alertElement.innerHTML = `
        <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            <span>Erreur lors du chargement de la TodoList</span>
        </div>
    `;
    document.body.prepend(alertElement);
    console.error(e);
}
