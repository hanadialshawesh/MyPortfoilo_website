import { Box, Stack, Button, Text, Image, StackDivider, useColorMode } from "@chakra-ui/react"
import { ProfileNameLight, ProfileNameDark } from './FigmaDesigns'
import { IconLink, IconArrowRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import React from "react"

const ProfileCard = ({ ...props }) => {
	const {colorMode} = useColorMode()
	const isDark = colorMode === 'dark'

	return (
		<Box className="profile" align="center" w="full" p={{ base: 10, md: 20, lg: 20 }}>
			<Stack direction='row' align="center" justify="center" spacing={{ base: 0, lg: "10rem" }} display={{ base: "block", lg: "flex" }} w='full'>
				<Stack dir="column" w={{ md: "500px", lg: '700px' }} align="center">
					{ props.textMode ? <Text fontSize={{ base: 50, lg: 70 }} fontFamily="interBold">{props.profileName}</Text>
					: isDark ? <ProfileNameDark /> : <ProfileNameLight /> }
					<Stack divider={<StackDivider />} direction={{ base: "column", sm: "column", md: "row", lg: 'row' }} justifyContent='center'>
						<Text to="/experience" as={Link} color={ isDark ? "gray.200" : "gray.700"} fontFamily="interSemiBold">{props.jobRole}</Text>
						<Text as='a' className="hyper-link" fontFamily="interSemiBold" color="blue.500" href={props.companyURL} target="_blank">{props.companyName}</Text>
					</Stack>
					<Stack gap={5} mt={5} direction="row">
						<Button className="resumeBtn" hidden={props.hideResume} fontFamily='interSemiBold' as='a' href={props.resume} target="_blank" leftIcon={<IconLink size={15} />}>Resume</Button>
						<Button className="seeMoreBtn" hidden={props.hideSeeMore} fontFamily='interSemiBold' to="/about" as={Link} variant="outline" rightIcon={<IconArrowRight size={15} />}>See More</Button>
					</Stack>
				</Stack>
				<div>
					<Image className="profileImage" style={props.imageStyle} cursor="pointer" onClick={() => window.open(props.profileURL)} as={motion.img} initial={{ scale: 0.7 }} animate={{ scale: 1 }} src={props.profilePhoto} borderRadius="50%" w={300} mt={{ base: 20, lg: 0 }} />
				</div>
			</Stack>
		</Box>
	)
}

export default ProfileCard