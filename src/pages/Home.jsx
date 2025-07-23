import { Flex, Button, Text, Heading, Badge, useColorMode } from "@chakra-ui/react"
import Achievements from "../components/Achievements"
import ProfileCard from "../components/ProfileCard"
import NavBar from "../components/NavBar"
import ProfileAvatar from "../resources/images/profile_avatar.png"
import { IconCircleArrowRight, IconExternalLink } from "@tabler/icons-react";
import { Link } from "react-router-dom"
import data from "../database.json"
import React from "react"
import "./Home.css"

const Home = () => {
	const profileHolder = data.profileHolder
	const profile = data.profiles[profileHolder]
	const { colorMode } = useColorMode();

	return (
		<Flex flexDir="column" minH="100vh" flexWrap="wrap" py={5}>
			<NavBar isHome />
			<Flex flexDir="column" alignItems="center">
			
				<div className="profile-container">
					<ProfileCard profileName={profile.name} profilePhoto={ProfileAvatar} profileURL={profile.githubProfile} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} resume={profile.resume} width={200} height={300} textMode />
				</div>
				<Flex flexDir="column" align="baseline" gap={2} maxW="6xl" bg="blackAlpha.50" p={5} m={5} borderRadius={7}>
					<Heading fontFamily="interBold">Hi,</Heading>
					<Text fontFamily="interRegular" align="justify">Thank you for your time and patience, and it's a pleasure to have you here with me. My name is <Text as='span' fontFamily='interSemiBold'>{profile.name}</Text>, and I'm <Text as='span' fontFamily='interSemiBold'>{profile.jobRole}</Text> with just<Text as='a' fontFamily="interSemiBold" href={profile.companyURL} target="_blank"className="hyper-link">{profile.company}</Text>  I'm passionate about coding and have spent the past three years building apps and websites from scratch using self-taught skills.<br /><br />As a result of my dedication, even the website you're currently viewing was developed by me using ReactJS. I am always looking to improve my skills and learn new things, and I am excited to continue my journey in the world of web development.</Text>
					<Button as={Link} to="/about" fontFamily="interSemiBold" variant="outline" size="sm" rightIcon={<IconCircleArrowRight size={15} />} alignSelf="end">Know More</Button>
				</Flex>
				<Achievements />
			</Flex>
		</Flex>
	)
}

export default Home
