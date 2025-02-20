export interface Message {
  id: string
  content: string
  senderId: string
  recipientId: string
  donationId: string
  isRead: boolean
  createdAt: string
  updatedAt: string
  sender: {
    id: string
    name: string
    image: string
  }
  recipient: {
    id: string
    name: string
    image: string
  }
}

export interface Conversation {
  donationId: string
  donationTitle: string
  lastMessage: Message
  unreadCount: number
  participants: {
    id: string
    name: string
    image: string
  }
}

export interface ChatState {
  conversations: Conversation[]
  messages: Message[]
  isLoading: boolean
  error: string | null
  sendMessage: (content: string, recipientId: string, donationId: string) => Promise<any>
  markAsRead: (messageId: string) => Promise<void>
} 