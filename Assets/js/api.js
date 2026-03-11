async function fetchProfileData() {
    const url = "./Data/profile.json";
    try {
        const fetching = await fetch(url);
        
        if (!fetching.ok){
            throw new Error(`Erro ao carregar JSON: ${fetching.status}`);
        }

        return await fetching.json();
    } catch (error) {
        console.error("Erro na requisição:", error);  
    }
}