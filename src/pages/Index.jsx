import React, { useState } from "react";
import { Box, VStack, HStack, Text, Avatar, Input, Button, Divider, Heading, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const contacts = [
  { id: 1, name: "John Doe", lastMessage: "Hey there!", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", lastMessage: "How are you?", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzA5NzMzNTg5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Bob Johnson", lastMessage: "Let's meet up!", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const ChatApp = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState("");

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = () => {
    // TODO: Implement sending message logic
    setMessage("");
  };

  return (
    <Flex h="100vh">
      <Box w="300px" bg="gray.100" p={4}>
        <VStack align="stretch" spacing={4}>
          <Heading size="lg">Chats</Heading>
          <Input placeholder="Search..." leftElement={<FaSearch />} />
          <Divider />
          {contacts.map((contact) => (
            <Box key={contact.id} p={2} borderRadius="md" bg={selectedContact === contact ? "blue.100" : "white"} cursor="pointer" onClick={() => handleContactClick(contact)}>
              <HStack>
                <Avatar size="md" name={contact.name} src={contact.avatar} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{contact.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {contact.lastMessage}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
      <Box flex={1} p={4}>
        {selectedContact ? (
          <VStack h="100%" align="stretch" spacing={4}>
            <HStack>
              <Avatar size="md" name={selectedContact.name} src={selectedContact.avatar} />
              <Text fontWeight="bold">{selectedContact.name}</Text>
              <Spacer />
              {/* Add more header buttons */}
            </HStack>
            <Divider />
            <Box flex={1}>{/* TODO: Render chat messages */}</Box>
            <HStack>
              <Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
              <Button colorScheme="blue" onClick={handleSendMessage}>
                <FaPaperPlane />
              </Button>
            </HStack>
          </VStack>
        ) : (
          <Box textAlign="center" py={10}>
            <Heading size="lg">Select a chat to start messaging</Heading>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ChatApp;
