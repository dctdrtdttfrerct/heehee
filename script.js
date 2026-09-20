// Połączenie z Supabase
const SUPABASE_URL = "https://ugqrtrexoamwlawralvn.supabase.co";
const SUPABASE_KEY = "sb_publishable_...";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Funkcja pobierająca wpisy i wyświetlająca je na stronie
async function loadPosts() {
    const { data, error } = await supabase
        .from("kuku") // nazwa Twojej tabeli
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error("Błąd pobierania wpisów:", error);
        return;
    }

    const container = document.getElementById("posts");
    container.innerHTML = "";

    data.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
            <h3>${post.tytul}</h3>
            <p>${post.opis}</p>
        `;
        container.appendChild(div);
    });
}

// Ładowanie wpisów od razu po wejściu na stronę
loadPosts();
