import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import 'reflect-metadata';
import '../polyfills';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFolderComponent } from './components/add-folder/add-folder.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ColorSchemeSwitcherComponent } from './components/color-scheme-switcher/color-scheme-switcher.component';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { DialogHeaderComponent } from './components/dialogs/dialog-header/dialog-header.component';
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';
import { LicenseDialogComponent } from './components/dialogs/license-dialog/license-dialog.component';
import { AboutComponent } from './components/information/about/about.component';
import { ComponentsComponent } from './components/information/components/components.component';
import { InformationComponent } from './components/information/information.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LogoFullComponent } from './components/logo-full/logo-full.component';
import { LogoSmallComponent } from './components/logo-small/logo-small.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AdvancedSettingsComponent } from './components/settings/advanced-settings/advanced-settings.component';
import { AppearanceSettingsComponent } from './components/settings/appearance-settings/appearance-settings.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';
import { StepIndicatorComponent } from './components/step-indicator/step-indicator.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WindowControlsComponent } from './components/window-controls/window-controls.component';
import { LastfmApi } from './core/api/lastfm/lastfm-api';
import { ImageProcessor } from './core/image-processor';
import { Desktop } from './core/io/desktop';
import { FileSystem } from './core/io/file-system';
import { Logger } from './core/logger';
import { BaseScheduler } from './core/scheduler/base-scheduler';
import { Scheduler } from './core/scheduler/scheduler';
import { BaseSettings } from './core/settings/base-settings';
import { Settings } from './core/settings/settings';
import { AlbumKeyGenerator } from './data/album-key-generator';
import { BaseDatabaseMigrator } from './data/base-database-migrator';
import { DataDelimiter } from './data/data-delimiter';
import { DatabaseFactory } from './data/database-factory';
import { DatabaseMigrator } from './data/database-migrator';
import { AlbumArtworkRepository } from './data/repositories/album-artwork-repository';
import { BaseAlbumArtworkRepository } from './data/repositories/base-album-artwork-repository';
import { BaseFolderRepository } from './data/repositories/base-folder-repository';
import { BaseFolderTrackRepository } from './data/repositories/base-folder-track-repository';
import { BaseRemovedTrackRepository } from './data/repositories/base-removed-track-repository';
import { BaseTrackRepository } from './data/repositories/base-track-repository';
import { FolderRepository } from './data/repositories/folder-repository';
import { FolderTrackRepository } from './data/repositories/folder-track-repository';
import { RemovedTrackRepository } from './data/repositories/removed-track-repository';
import { TrackRepository } from './data/repositories/track-repository';
import { WebviewDirective } from './directives/webview.directive';
import { GlobalErrorHandler } from './globalErrorHandler';
import { FileMetadataFactory } from './metadata/file-metadata-factory';
import { MimeTypes } from './metadata/mime-types';
import { AlbumArtworkCacheIdFactory } from './services/album-artwork-cache/album-artwork-cache-id-factory';
import { AlbumArtworkCacheService } from './services/album-artwork-cache/album-artwork-cache.service';
import { BaseAlbumArtworkCacheService } from './services/album-artwork-cache/base-album-artwork-cache.service';
import { AppearanceService } from './services/appearance/appearance.service';
import { BaseAppearanceService } from './services/appearance/base-appearance.service';
import { BaseDialogService } from './services/dialog/base-dialog.service';
import { DialogService } from './services/dialog/dialog.service';
import { ElectronService } from './services/electron.service';
import { BaseFolderService } from './services/folder/base-folder.service';
import { FolderService } from './services/folder/folder.service';
import { AlbumArtworkAdder } from './services/indexing/album-artwork-adder';
import { AlbumArtworkGetter } from './services/indexing/album-artwork-getter';
import { AlbumArtworkIndexer } from './services/indexing/album-artwork-indexer';
import { AlbumArtworkRemover } from './services/indexing/album-artwork-remover';
import { BaseCollectionChecker } from './services/indexing/base-collection-checker';
import { BaseIndexablePathFetcher } from './services/indexing/base-indexable-path-fetcher';
import { BaseIndexingService } from './services/indexing/base-indexing.service';
import { CollectionChecker } from './services/indexing/collection-checker';
import { DirectoryWalker } from './services/indexing/directory-walker';
import { EmbeddedAlbumArtworkGetter } from './services/indexing/embedded-album-artwork-getter';
import { ExternalAlbumArtworkGetter } from './services/indexing/external-album-artwork-getter';
import { ExternalArtworkPathGetter } from './services/indexing/external-artwork-path-getter';
import { IndexablePathFetcher } from './services/indexing/indexable-path-fetcher';
import { IndexingService } from './services/indexing/indexing.service';
import { OnlineAlbumArtworkGetter } from './services/indexing/online-album-artwork-getter';
import { TrackAdder } from './services/indexing/track-adder';
import { TrackFieldCreator } from './services/indexing/track-field-creator';
import { TrackFiller } from './services/indexing/track-filler';
import { TrackIndexer } from './services/indexing/track-indexer';
import { TrackRemover } from './services/indexing/track-remover';
import { TrackUpdater } from './services/indexing/track-updater';
import { BaseSnackbarService } from './services/snack-bar/base-snack-bar.service';
import { SnackBarService } from './services/snack-bar/snack-bar.service';
import { BaseStatusService } from './services/status/base-status.service';
import { StatusService } from './services/status/status.service';
import { BaseTranslatorService } from './services/translator/base-translator.service';
import { TranslatorService } from './services/translator/translator.service';
import { BaseUpdateService } from './services/update/base-update.service';
import { UpdateService } from './services/update/update.service';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    WelcomeComponent,
    CollectionComponent,
    WindowControlsComponent,
    LogoFullComponent,
    LogoSmallComponent,
    StepIndicatorComponent,
    ColorSchemeSwitcherComponent,
    AddFolderComponent,
    DialogHeaderComponent,
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    LicenseDialogComponent,
    LoadingComponent,
    MainMenuComponent,
    BackButtonComponent,
    SettingsComponent,
    InformationComponent,
    AppearanceSettingsComponent,
    AdvancedSettingsComponent,
    AboutComponent,
    ComponentsComponent,
    StatusPanelComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatRippleModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    ElectronService,
    Desktop,
    DatabaseFactory,
    FileSystem,
    Settings,
    TrackIndexer,
    DirectoryWalker,
    TrackRemover,
    TrackUpdater,
    TrackAdder,
    TrackFiller,
    FileMetadataFactory,
    TrackFieldCreator,
    DataDelimiter,
    AlbumKeyGenerator,
    MimeTypes,
    AlbumArtworkCacheIdFactory,
    ImageProcessor,
    AlbumArtworkGetter,
    ExternalAlbumArtworkGetter,
    EmbeddedAlbumArtworkGetter,
    OnlineAlbumArtworkGetter,
    AlbumArtworkIndexer,
    AlbumArtworkAdder,
    AlbumArtworkRemover,
    ExternalArtworkPathGetter,
    LastfmApi,
    Logger,
    Scheduler,
    { provide: BaseAlbumArtworkRepository, useClass: AlbumArtworkRepository },
    { provide: BaseAlbumArtworkCacheService, useClass: AlbumArtworkCacheService },
    { provide: BaseCollectionChecker, useClass: CollectionChecker },
    { provide: BaseIndexablePathFetcher, useClass: IndexablePathFetcher },
    { provide: BaseSettings, useClass: Settings },
    { provide: BaseDatabaseMigrator, useClass: DatabaseMigrator },
    { provide: BaseFolderRepository, useClass: FolderRepository },
    { provide: BaseRemovedTrackRepository, useClass: RemovedTrackRepository },
    { provide: BaseTrackRepository, useClass: TrackRepository },
    { provide: BaseFolderTrackRepository, useClass: FolderTrackRepository },
    { provide: BaseAppearanceService, useClass: AppearanceService },
    { provide: BaseFolderService, useClass: FolderService },
    { provide: BaseIndexingService, useClass: IndexingService },
    { provide: BaseTranslatorService, useClass: TranslatorService },
    { provide: BaseUpdateService, useClass: UpdateService },
    { provide: BaseSnackbarService, useClass: SnackBarService },
    { provide: BaseStatusService, useClass: StatusService },
    { provide: BaseDialogService, useClass: DialogService },
    { provide: BaseScheduler, useClass: Scheduler },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationDialogComponent, ErrorDialogComponent, LicenseDialogComponent
  ],
})
export class AppModule { }
