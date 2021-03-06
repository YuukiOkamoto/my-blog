import React from 'react';
import { Link, graphql } from 'gatsby';
import { Box, Button, Stack, Text } from '@chakra-ui/core';

import { GiSpellBook } from 'react-icons/gi';

import Status from '../components/Status';
import Container from '../components/Container';
import PostCard from '../components/PostCard';
import Layout from '../components/layout';
import {
  EngineerHistory,
  MuscleHistory,
  DevelopmentHistory,
} from '../components/History';
import SEO from '../components/SEO';

const Section = props => <Box as='section' py='12' {...props} />;

const SectionTitle = props => (
  <Text as='h2' fontSize='4xl' textAlign='center' mb='8' {...props} />
);

const ButtonLink = ({ icon, ...props }) => (
  <Button
    as={Link}
    rightIcon={icon}
    variantColor='teal'
    variant='outline'
    css={{
      svg: {
        width: '1.5rem',
        height: '1.5rem',
      },
    }}
    {...props}
  />
);

const Top = ({ data: { allPosts }, location }) => {
  return (
    <Layout location={location}>
      <SEO />

      <Section id='status' minHeight='80vh'>
        <Container>
          <SectionTitle>ステータスオープン！</SectionTitle>
          <Status />
        </Container>
      </Section>
      <Section id='careers' bg='gray.200'>
        <Container>
          <SectionTitle>職務経歴</SectionTitle>
          <EngineerHistory />
        </Container>
      </Section>
      <Section id='muscles'>
        <Container>
          <SectionTitle>筋肉経歴</SectionTitle>
          <MuscleHistory />
        </Container>
      </Section>
      <Section id='developments' bg='gray.200'>
        <Container>
          <SectionTitle>開発実績</SectionTitle>
          <DevelopmentHistory />
        </Container>
      </Section>
      <Section id='blog'>
        <Container>
          <SectionTitle>ブログ</SectionTitle>
          <Stack spacing='20'>
            {allPosts.edges.map(({ node: post }) => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          </Stack>
          <Box textAlign='center' mt='4'>
            <ButtonLink to='/blog' icon={GiSpellBook}>
              ブログ記事一覧へ
            </ButtonLink>
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allPosts: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      limit: 5
    ) {
      edges {
        node {
          ...postFields
        }
      }
    }
  }
`;

export default Top;
