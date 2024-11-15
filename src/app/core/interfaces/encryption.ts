export interface DinHeader {
  device: string;
  language: string;
  uuid: string;
  ip: string;
  transactionTime: string;
}

export interface EncryptionRequest {
  dinHeader: DinHeader;
  dinBody: Record<string, string>;
}

export interface EncryptionResponse {
  encryptedText: string;
  iv: string;
}
