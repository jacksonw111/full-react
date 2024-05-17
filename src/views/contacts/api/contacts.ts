import api from "@/libs/http";

export interface Contact {
  id?: number;
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

class ContactService {
  url = "/contacts";
  async all(): Promise<Contact[]> {
    const { data } = await api.get(this.url);
    return data;
  }

  async get(id: number): Promise<Contact> {
    const { data } = await api.get(`${this.url}/${id}`);
    return data;
  }
  async add(contact: Contact): Promise<Contact[]> {
    return await api.post(this.url, contact);
  }
  async update(contact: Contact): Promise<Contact[]> {
    return await api.put(this.url, contact);
  }
}

export const contactService = new ContactService();
