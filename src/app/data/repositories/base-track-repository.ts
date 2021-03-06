import { AlbumData } from '../album-data';
import { Track } from '../entities/track';

export abstract class BaseTrackRepository {
    public abstract getNumberOfTracksThatNeedIndexing(): number;
    public abstract getNumberOfTracks(): number;
    public abstract getMaximumDateFileModified(): number;
    public abstract deleteTracksThatDoNotBelongFolders(): number;
    public abstract deleteTrack(trackId: number): void;
    public abstract getTracks(): Track[];
    public abstract updateTrack(track: Track): void;
    public abstract addTrack(track: Track): void;
    public abstract getTrackByPath(path: string): Track;
    public abstract getAlbumDataThatNeedsIndexing(): AlbumData[];
    public abstract getLastModifiedTrackForAlbumKeyAsync(albumKey: string): Track;
    public abstract disableNeedsAlbumArtworkIndexingAsync(albumKey: string): void;
}
