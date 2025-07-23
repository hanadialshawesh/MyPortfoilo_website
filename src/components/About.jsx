import { Badge, Image, Stack, Flex, Text, Wrap, useColorMode } from "@chakra-ui/react"
import Avatar from "../resources/images/avatar.png";
import data from "../database.json"
import React from "react"
import './About.css'

// Global profile
const profile = data.profiles[data.profileHolder]

const AboutTab = () => {
    return (
        <Flex mx={5} my={10} p={5} alignItems="center" gap={20} flexDir="column">
            <Image src={Avatar} alt="Avatar" width="xs" borderRadius="full" />
            <Flex flexDir="column" fontFamily="interRegular">
                <Text p={2} textAlign="justify">
                👋 Hey there! I'm <span className="highligher">{profile.name}</span>, Software Engineering student passionate about full-stack and mobile development.<br />
                💻 I have skills in Python, JavaScript, Flutter, Firebase, and React, and I enjoy building projects that solve real problems.<br />
                🔍 I'm currently looking for exciting opportunities to use my personal and professional skills to build Software solutions and products for the client and for the company with well crafted design and user experience.
                I'm still not done enough, updating myself with the latest new frameworks and technologies to make the websites more powerful and interactive.<br />
                </Text>
                <br />
                <br />
                 - Let's connect for any opportunities ahead for me. -<br />
                <br />
                Portfolio - https://hanadialshawesh.vercel.app
                <br />
                📧 Email Id - hanadialshawesh@gmail.com
            </Flex>
        </Flex>
    )
}

export const SkillsTab = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const beginner = [];
    const intermediate = [];
    const advanced = [];
    const expert = [];

    profile.skills.map(skill => {
        switch (skill.level) {
            case 0:
                beginner.push(skill);
                break;
            case 1:
                intermediate.push(skill);
                break;
            case 2:
                advanced.push(skill);
                break;
            case 3:
                expert.push(skill);
                break;
        }
    })

    return (
        <Stack id="skills" className="skills_design" direction="column" align="center">
            <Stack className="skills" w='fit-content' maxW='container.lg' align='center' justify='center'>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Advanced++</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            expert.map((skill, idx) => (
                                <Stack key={"skillcard__" + idx} className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Advanced</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            advanced.map((skill) => (
                                <Stack key={"skill__"+skill.text} className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Intermediate</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            intermediate.map((skill) => (
                                <Stack key={"skill__"+skill.text} className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Beginner</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            beginner.map((skill) => (
                                <Stack key={"skill__"+skill.text} className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AboutTab