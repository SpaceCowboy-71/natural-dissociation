//
// SpotifyPlaylistInfo.tsx
// 
//
// Created by Thomas Schönmann on 08.02.2020
// Copyright © 2020 expressFlow GmbH. All rights reserved.
//
// 
//

import React, { memo, ReactNode } from 'react';
import { SpotifyPlaylistMetadata } from '../../model/data.types';


/*
 *
 * Interfaces.
 *
 */

interface SpotifyPlaylistInfoProps {
    metadata:SpotifyPlaylistMetadata
}

/*
 *
 * Components.
 *
 */

export default memo<SpotifyPlaylistInfoProps>(props => {
 const {metadata} = props;

 return null;
});