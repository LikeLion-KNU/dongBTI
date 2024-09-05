import React from 'react';
import * as S from './DevProfileCard.style';

import githubIcon from '@/assets/icons/Github.svg';
import instagramIcon from '@/assets/icons/Instagram.svg';

interface CardProps {
  name: string;
  tasks: string[];
  githubId: string;
  instagramId: string;
  department: string;
  club: string;
  role: string;
}

const DevProfileCard: React.FC<CardProps> = ({
  name,
  tasks,
  githubId,
  instagramId,
  department,
  club,
  role,
}) => {
  const githubProfileImage = `https://github.com/${githubId}.png`;

  return (
    <S.CardWrapper>
      <S.Avatar src={githubProfileImage} alt="Profile" />
      <S.ContentWrapper>
        <S.Name>{name}</S.Name>
        <S.TaskList>{tasks.join(' · ')}</S.TaskList>
        <S.SocialLinks>
          {/* GitHub 링크 */}
          <a href={`https://github.com/${githubId}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', marginRight: '8px' }}>
            <S.IconWrapper>
              <img src={githubIcon} alt="GitHub" width="16" height="16" />
            </S.IconWrapper>
            <span>{githubId}</span>
          </a>

          {/* Instagram 링크 */}
          <a href={`https://instagram.com/${instagramId}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', marginRight: '8px' }}>
            <S.IconWrapper>
              <img src={instagramIcon} alt="Instagram" width="16" height="16" />
            </S.IconWrapper>
            <span>{instagramId}</span>
          </a>
        </S.SocialLinks>
        <S.MetaInfo>
          <S.Badge>{department}</S.Badge>
          <S.ClubBadge>{club}</S.ClubBadge>
          <S.Role>{role}</S.Role>
        </S.MetaInfo>
      </S.ContentWrapper>
    </S.CardWrapper>
  );
};

export default DevProfileCard;
