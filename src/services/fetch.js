export async function getDatos() {
    try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}