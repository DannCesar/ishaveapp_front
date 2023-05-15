import React from  'react';
import * as S from './styles'
import { HomeIcon } from '../../assets/Icons/HomeIcon/HomeIcon';
import { UserIcon } from '../../assets/Icons/UserIcon/UserIcon';
import { SccisorsIcon } from '../../assets/Icons/SccissorsIcon/SccisorsIcon';
import { ScheduleIcon } from '../../assets/Icons/ScheduleIcon/ScheduleIcon';

export const Layout: React.FC = () => {
    return(
        <S.Container>
            <S.NavigationLayout>
                <h2>IShaveApp</h2>
                <HomeIcon/>
                <UserIcon/>
                <SccisorsIcon/>
                <ScheduleIcon/>
            </S.NavigationLayout>
            <S.ContentContainer>

            </S.ContentContainer>
        </S.Container>
        
    )
}