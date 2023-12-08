'use client';

import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(config as any, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}