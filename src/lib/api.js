import { user } from '$lib/stores/user.js';


const API_URL = 'http://localhost:3000/api';

// Login
export async function Login(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Identifiants incorrects');
  }

  localStorage.setItem('token', data.token);

  const me = await Me();
  if (me) {
    user.set(me);
  }

  return data;
}

// Register
export async function Register(email, password, username) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, username }),
  });

  const data = await res.json();

  if (!res.ok) {
    // Lève une erreur exploitable avec le message du backend
    throw new Error(data.error || 'Erreur lors de l’inscription');
  }

  await Login(email, password);
  return data;
}

// Obtention du nom d'utilisateur et autres infos
export async function Me() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const res = await fetch(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (res.ok) {
    const data = await res.json();
    user.set(data.user);
    return data.user;
  }

  return null;
}
// Supprime l'utilisateur
export async function DeleteUser() {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Aucun token trouvé. Utilisateur non connecté.');
  }

  const res = await fetch(`${API_URL}/user`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error('Échec lors de la suppression');
  }

  return res.json();
}

// Renomme l'utilisateur
export async function RenameUser(newUsername) {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Aucun token trouvé. Utilisateur non connecté.');
  }

  const res = await fetch(`${API_URL}/rename`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ newUsername })
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Échec lors du changement de nom d’utilisateur.');
  }

  return res.json();
}

// Liste des projets
export async function ListProjects() {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Aucun token trouvé. Utilisateur non connecté.');
  }

  const res = await fetch(`${API_URL}/projects`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error('Échec de récupération des projets');
  }

  return res.json();
}

// Crée un projet
export async function CreateProject(name, html = '', css = '', js = '') {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/project`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ name, html, css, js })
  });
  if (!res.ok) throw new Error('Erreur création projet');
  return res.json();
}

// Obtient un projet
export async function GetProject(id) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/project/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error('Erreur récupération projet');
  return res.json();
}

// Modifie un projet
export async function EditProject(id, html = '', js = '', css = '', name) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/project/${id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ html, js, css, name })
  });
  if (!res.ok) throw new Error('Erreur modification projet');
  return res.json();
}

// Supprime un projet
export async function DeleteProject(id) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/project/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error('Erreur récupération projet');
  return res.json();
}

// Upload un avatar
export async function uploadpp(file) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Utilisateur non authentifié');

  const formData = new FormData();
  formData.append('avatar', file);

  const res = await fetch(`${API_URL}/uploadpp`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      // Note : ne mets pas 'Content-Type', fetch le met automatiquement pour form-data
    },
    body: formData
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Erreur lors de l\'upload');
  }

  return res.json();
}
