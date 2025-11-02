import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { join } from 'path';
import { existsSync } from 'fs';

@Injectable()
export class FirebaseService {
  private readonly logger = new Logger(FirebaseService.name);

  constructor() {
    // Use project root as base (works in dev & prod)
    const serviceAccountPath = join(process.cwd(), 'assets/firebase/serviceAccountKey.json');

    if (!existsSync(serviceAccountPath)) {
      throw new Error(`Firebase service account file not found at ${serviceAccountPath}`);
    }

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath),
      });
      this.logger.log('Firebase initialized');
    }
  }

  async verifyIdToken(idToken: string) {
    try {
      return await admin.auth().verifyIdToken(idToken);
    } catch (err) {
      this.logger.error('Invalid Firebase ID token', err);
      throw new Error('Invalid Firebase token');
    }
  }
}
