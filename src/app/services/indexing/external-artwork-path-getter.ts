import { Injectable } from '@angular/core';
import * as path from 'path';
import { Defaults } from '../../core/base/defaults';
import { FileSystem } from '../../core/io/file-system';
import { StringCompare } from '../../core/string-compare';

@Injectable()
export class ExternalArtworkPathGetter {
    constructor(private fileSystem: FileSystem) {
    }

    public getExternalArtworkPath(audioFilePath: string): string {
        if (StringCompare.isNullOrWhiteSpace(audioFilePath)) {
            return undefined;
        }

        const directory: string = this.fileSystem.getDirectoryPath(audioFilePath);
        const fileNameWithoutExtention: string = this.fileSystem.getFileNameWithoutExtension(audioFilePath);

        for (const externalCoverArtPattern of Defaults.externalCoverArtPatterns) {
            const possibleExternalArtworkFilePath: string = path.join(
                directory,
                externalCoverArtPattern.replace('%filename%', fileNameWithoutExtention)
            );

            if (this.fileSystem.pathExists(possibleExternalArtworkFilePath)) {
                return possibleExternalArtworkFilePath;
            }
        }

        return undefined;
    }
}
