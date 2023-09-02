export function useAutoScrollChat() {
  const getPropertiesElements = () => {
    const chatInputRef = document.querySelector('.chat-input')
    const messagesRef = document.querySelector('.chat-output')

    const messagesBottom = messagesRef?.getBoundingClientRect().bottom
    const heightInput = chatInputRef?.getBoundingClientRect().height

    return {
      messagesRef,
      messagesBottom,
      heightInput,
    }
  }

  const scrollChat = () => {
    setTimeout(() => {
      const { messagesBottom, heightInput } = getPropertiesElements()

      if (!heightInput || !messagesBottom) return

      if (window.innerHeight - heightInput < messagesBottom) {
        window.scrollBy({
          top: messagesBottom - window.innerHeight + heightInput + 20,
        })
      }
    }),
      50
  }

  return { scrollChat }
}
