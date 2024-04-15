import { ReadableStream } from '@cloudflare/workers-types'

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export enum Tenants {
    OneDrivePersonal = "onedrive/personal"
}

export enum ConflictWritePolicies {
    Fail = "fail",
    Overwrite = "overwrite",
    Default = Fail,
}

export type StorageLocation = {
    tenant: Tenants;
    path: string;
}

export type ContentSource = {
    external?: ExternalContentSource;
    embedded?: EmbeddedContentSource;
    contentType?: string;
}

export type ExternalContentSource = {
    url: string;
}

export type EmbeddedContentSource = {
    stream: ReadableStream;
}

export type PutFileV1Input = {
    location: Optional<StorageLocation, 'tenant'>;
    filename: string;
    contentSource: ContentSource;
    onConflict?: ConflictWritePolicies;
}

export type FileDetailsV1 = {
    location: StorageLocation;
    filename: string;
    content: ContentDetails;
    shares: SharingLink[];
    storage: StorageDetails;
}

export type StorageDetails = {
    oneDrive?: OneDriveStorageDetails;
}

export type OneDriveStorageDetails = {
    itemId: string;
    sharingIds: string[];
}

export type ContentDetails = {
    contentType?: string;
    hashes: Hashes;
}

export type Hashes = {
    sha256?: string;
    sha1?: string;
}

export type SharingLink = {
    type: 'human' | 'embed';
    url: string;
}

export type PutFileV1Output = FileDetailsV1

export type GetFileV1Input = {
    location: Optional<StorageLocation, 'tenant'>;
    filename: string;
}

export type GetFileV1Output = FileDetailsV1

export interface ArchiverServiceContract {
    putFileV1(input: PutFileV1Input): Promise<PutFileV1Output>;
    getFileV1(input: GetFileV1Input): Promise<GetFileV1Output>;
}
