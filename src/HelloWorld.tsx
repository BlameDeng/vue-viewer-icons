import "./HelloWorld.css";

import { defineComponent } from "vue";

import { Svg2d } from "./components/icons/2d";
import { Svg3d } from "./components/icons/3d";
import { SvgActivity } from "./components/icons/Activity";
import { SvgAddCircular } from "./components/icons/AddCircular";
import { SvgAdd } from "./components/icons/Add";
import { SvgAirplane } from "./components/icons/Airplane";
import { SvgAlignBottom } from "./components/icons/AlignBottom";
import { SvgAlignCenterHorizontal } from "./components/icons/AlignCenterHorizontal";
import { SvgAlignCenterVertical } from "./components/icons/AlignCenterVertical";
import { SvgAlignLeft } from "./components/icons/AlignLeft";
import { SvgAlignRight } from "./components/icons/AlignRight";
import { SvgAlignTop } from "./components/icons/AlignTop";
import { SvgAndroid } from "./components/icons/Android";
import { SvgAnnotation } from "./components/icons/Annotation";
import { SvgApple } from "./components/icons/Apple";
import { SvgArchive } from "./components/icons/Archive";
import { SvgArrowDown } from "./components/icons/ArrowDown";
import { SvgArrowLeft } from "./components/icons/ArrowLeft";
import { SvgArrowRight } from "./components/icons/ArrowRight";
import { SvgArrowUp } from "./components/icons/ArrowUp";
import { SvgAttach } from "./components/icons/Attach";
import { SvgAutomatic } from "./components/icons/Automatic";
import { SvgAway } from "./components/icons/Away";
import { SvgBasket } from "./components/icons/Basket";
import { SvgBentleySystems } from "./components/icons/BentleySystems";
import { SvgBlank } from "./components/icons/Blank";
import { SvgBolt } from "./components/icons/Bolt";
import { SvgBookmark } from "./components/icons/Bookmark";
import { SvgCalendar } from "./components/icons/Calendar";
import { SvgCameraAnimation } from "./components/icons/CameraAnimation";
import { SvgCamera } from "./components/icons/Camera";
import { SvgCaretDownSmall } from "./components/icons/CaretDownSmall";
import { SvgCaretDown } from "./components/icons/CaretDown";
import { SvgCaretLeftSmall } from "./components/icons/CaretLeftSmall";
import { SvgCaretLeft } from "./components/icons/CaretLeft";
import { SvgCaretRightSmall } from "./components/icons/CaretRightSmall";
import { SvgCaretRight } from "./components/icons/CaretRight";
import { SvgCaretUpSmall } from "./components/icons/CaretUpSmall";
import { SvgCaretUp } from "./components/icons/CaretUp";
import { SvgCharts } from "./components/icons/Charts";
import { SvgChat } from "./components/icons/Chat";
import { SvgCheckmarkSmall } from "./components/icons/CheckmarkSmall";
import { SvgCheckmark } from "./components/icons/Checkmark";
import { SvgChevronDown } from "./components/icons/ChevronDown";
import { SvgChevronLeftDouble } from "./components/icons/ChevronLeftDouble";
import { SvgChevronLeft } from "./components/icons/ChevronLeft";
import { SvgChevronRightDouble } from "./components/icons/ChevronRightDouble";
import { SvgChevronRight } from "./components/icons/ChevronRight";
import { SvgChevronUp } from "./components/icons/ChevronUp";
import { SvgCircle } from "./components/icons/Circle";
import { SvgClipboard } from "./components/icons/Clipboard";
import { SvgClock } from "./components/icons/Clock";
import { SvgCloseCircular } from "./components/icons/CloseCircular";
import { SvgCloseSmall } from "./components/icons/CloseSmall";
import { SvgClose } from "./components/icons/Close";
import { SvgCloudDownload } from "./components/icons/CloudDownload";
import { SvgCloudUpload } from "./components/icons/CloudUpload";
import { SvgCloud } from "./components/icons/Cloud";
import { SvgCollapseAll } from "./components/icons/CollapseAll";
import { SvgCollapse } from "./components/icons/Collapse";
import { SvgColumnManager } from "./components/icons/ColumnManager";
import { SvgCompare } from "./components/icons/Compare";
import { SvgComputer } from "./components/icons/Computer";
import { SvgCopy } from "./components/icons/Copy";
import { SvgCrop } from "./components/icons/Crop";
import { SvgCursorClick } from "./components/icons/CursorClick";
import { SvgCursor } from "./components/icons/Cursor";
import { SvgCut } from "./components/icons/Cut";
import { SvgDatabase } from "./components/icons/Database";
import { SvgDelete } from "./components/icons/Delete";
import { SvgDetails } from "./components/icons/Details";
import { SvgDeveloper } from "./components/icons/Developer";
import { SvgDisconnect } from "./components/icons/Disconnect";
import { SvgDistributeBottom } from "./components/icons/DistributeBottom";
import { SvgDistributeCenterHorizontal } from "./components/icons/DistributeCenterHorizontal";
import { SvgDistributeCenterVertical } from "./components/icons/DistributeCenterVertical";
import { SvgDistributeLeft } from "./components/icons/DistributeLeft";
import { SvgDistributeRight } from "./components/icons/DistributeRight";
import { SvgDistributeTop } from "./components/icons/DistributeTop";
import { SvgDocumentLock } from "./components/icons/DocumentLock";
import { SvgDocumentReference } from "./components/icons/DocumentReference";
import { SvgDocument } from "./components/icons/Document";
import { SvgDocumentation } from "./components/icons/Documentation";
import { SvgDownload } from "./components/icons/Download";
import { SvgDragHandle } from "./components/icons/DragHandle";
import { SvgDraw } from "./components/icons/Draw";
import { SvgDuplicate } from "./components/icons/Duplicate";
import { SvgEditAll } from "./components/icons/EditAll";
import { SvgEdit } from "./components/icons/Edit";
import { SvgEllipse } from "./components/icons/Ellipse";
import { SvgEmailAt } from "./components/icons/EmailAt";
import { SvgEmail } from "./components/icons/Email";
import { SvgExit } from "./components/icons/Exit";
import { SvgExpandAll } from "./components/icons/ExpandAll";
import { SvgExpand } from "./components/icons/Expand";
import { SvgExport } from "./components/icons/Export";
import { SvgEyedropperDrop } from "./components/icons/EyedropperDrop";
import { SvgEyedropperFilled } from "./components/icons/EyedropperFilled";
import { SvgEyedropper } from "./components/icons/Eyedropper";
import { SvgFastBackward } from "./components/icons/FastBackward";
import { SvgFastForward } from "./components/icons/FastForward";
import { SvgFeedback } from "./components/icons/Feedback";
import { SvgFilterHollow } from "./components/icons/FilterHollow";
import { SvgFilter } from "./components/icons/Filter";
import { SvgFind } from "./components/icons/Find";
import { SvgFireExtinguisher } from "./components/icons/FireExtinguisher";
import { SvgFitToView } from "./components/icons/FitToView";
import { SvgFlag } from "./components/icons/Flag";
import { SvgFolderAdd } from "./components/icons/FolderAdd";
import { SvgFolderBrowse } from "./components/icons/FolderBrowse";
import { SvgFolderChevronDown } from "./components/icons/FolderChevronDown";
import { SvgFolderChevronUp } from "./components/icons/FolderChevronUp";
import { SvgFolderExport } from "./components/icons/FolderExport";
import { SvgFolderImport } from "./components/icons/FolderImport";
import { SvgFolderLock } from "./components/icons/FolderLock";
import { SvgFolderMinimize } from "./components/icons/FolderMinimize";
import { SvgFolderOpened } from "./components/icons/FolderOpened";
import { SvgFolderRemove } from "./components/icons/FolderRemove";
import { SvgFolderShortcut } from "./components/icons/FolderShortcut";
import { SvgFolder } from "./components/icons/Folder";
import { SvgFontBold } from "./components/icons/FontBold";
import { SvgFontColor } from "./components/icons/FontColor";
import { SvgFontItalic } from "./components/icons/FontItalic";
import { SvgFontSize } from "./components/icons/FontSize";
import { SvgFrameBackward } from "./components/icons/FrameBackward";
import { SvgFrameForward } from "./components/icons/FrameForward";
import { SvgFunction } from "./components/icons/Function";
import { SvgGestureOneFingerDrag } from "./components/icons/GestureOneFingerDrag";
import { SvgGestureOneFingerTapDouble } from "./components/icons/GestureOneFingerTapDouble";
import { SvgGestureOneFingerTap } from "./components/icons/GestureOneFingerTap";
import { SvgGesturePinch } from "./components/icons/GesturePinch";
import { SvgGestureTouch } from "./components/icons/GestureTouch";
import { SvgGestureTwoFingerDrag } from "./components/icons/GestureTwoFingerDrag";
import { SvgGestureTwoFingerTap } from "./components/icons/GestureTwoFingerTap";
import { SvgGestureTwoFinger } from "./components/icons/GestureTwoFinger";
import { SvgGlobe } from "./components/icons/Globe";
import { SvgGoToEnd } from "./components/icons/GoToEnd";
import { SvgGoToStart } from "./components/icons/GoToStart";
import { SvgGraphBar } from "./components/icons/GraphBar";
import { SvgGraphPieChart } from "./components/icons/GraphPieChart";
import { SvgGraphScatterChart } from "./components/icons/GraphScatterChart";
import { SvgGraph } from "./components/icons/Graph";
import { SvgGrid } from "./components/icons/Grid";
import { SvgGroupUngroup } from "./components/icons/GroupUngroup";
import { SvgGroup } from "./components/icons/Group";
import { SvgHand } from "./components/icons/Hand";
import { SvgHeart } from "./components/icons/Heart";
import { SvgHelpCircularHollow } from "./components/icons/HelpCircularHollow";
import { SvgHelpCircular } from "./components/icons/HelpCircular";
import { SvgHistory } from "./components/icons/History";
import { SvgHome } from "./components/icons/Home";
import { SvgHourglass } from "./components/icons/Hourglass";
import { SvgIBeam } from "./components/icons/IBeam";
import { SvgImageFrame } from "./components/icons/ImageFrame";
import { SvgImage } from "./components/icons/Image";
import { SvgImodelHollow } from "./components/icons/ImodelHollow";
import { SvgImodel } from "./components/icons/Imodel";
import { SvgImport } from "./components/icons/Import";
import { SvgImportantSmall } from "./components/icons/ImportantSmall";
import { SvgImportantVery } from "./components/icons/ImportantVery";
import { SvgImportant } from "./components/icons/Important";
import { SvgInfoCircularHollow } from "./components/icons/InfoCircularHollow";
import { SvgInfoCircular } from "./components/icons/InfoCircular";
import { SvgInfo } from "./components/icons/Info";
import { SvgInstall } from "./components/icons/Install";
import { SvgIssueReport } from "./components/icons/IssueReport";
import { SvgItem } from "./components/icons/Item";
import { SvgLabel } from "./components/icons/Label";
import { SvgLayers } from "./components/icons/Layers";
import { SvgLightbulbHollow } from "./components/icons/LightbulbHollow";
import { SvgLightbulb } from "./components/icons/Lightbulb";
import { SvgLine } from "./components/icons/Line";
import { SvgLink } from "./components/icons/Link";
import { SvgList } from "./components/icons/List";
import { SvgLocation } from "./components/icons/Location";
import { SvgLockUnlocked } from "./components/icons/LockUnlocked";
import { SvgLock } from "./components/icons/Lock";
import { SvgLoop } from "./components/icons/Loop";
import { SvgMaintenance } from "./components/icons/Maintenance";
import { SvgManager } from "./components/icons/Manager";
import { SvgMap } from "./components/icons/Map";
import { SvgMeasure } from "./components/icons/Measure";
import { SvgMenu } from "./components/icons/Menu";
import { SvgMerge } from "./components/icons/Merge";
import { SvgMinimize } from "./components/icons/Minimize";
import { SvgModel } from "./components/icons/Model";
import { SvgMoon } from "./components/icons/Moon";
import { SvgMoreCircular } from "./components/icons/MoreCircular";
import { SvgMoreSmall } from "./components/icons/MoreSmall";
import { SvgMoreVerticalCircular } from "./components/icons/MoreVerticalCircular";
import { SvgMoreVerticalSmall } from "./components/icons/MoreVerticalSmall";
import { SvgMoreVertical } from "./components/icons/MoreVertical";
import { SvgMore } from "./components/icons/More";
import { SvgMouseClickLeft } from "./components/icons/MouseClickLeft";
import { SvgMouseClickRight } from "./components/icons/MouseClickRight";
import { SvgMouseClickWheel } from "./components/icons/MouseClickWheel";
import { SvgMouseClick } from "./components/icons/MouseClick";
import { SvgMove } from "./components/icons/Move";
import { SvgNamedVersionAdd } from "./components/icons/NamedVersionAdd";
import { SvgNetwork } from "./components/icons/Network";
import { SvgNew } from "./components/icons/New";
import { SvgNotificationSettings } from "./components/icons/NotificationSettings";
import { SvgNotification } from "./components/icons/Notification";
import { SvgObjectMove } from "./components/icons/ObjectMove";
import { SvgObjectRotate } from "./components/icons/ObjectRotate";
import { SvgObjectScale } from "./components/icons/ObjectScale";
import { SvgOffline } from "./components/icons/Offline";
import { SvgPaintbrush } from "./components/icons/Paintbrush";
import { SvgPalette } from "./components/icons/Palette";
import { SvgPanoramaModel } from "./components/icons/PanoramaModel";
import { SvgPanorama } from "./components/icons/Panorama";
import { SvgPasteHollow } from "./components/icons/PasteHollow";
import { SvgPaste } from "./components/icons/Paste";
import { SvgPauseCircular } from "./components/icons/PauseCircular";
import { SvgPause } from "./components/icons/Pause";
import { SvgPerspective } from "./components/icons/Perspective";
import { SvgPin } from "./components/icons/Pin";
import { SvgPlaceholder } from "./components/icons/Placeholder";
import { SvgPlayBackward } from "./components/icons/PlayBackward";
import { SvgPlayCircular } from "./components/icons/PlayCircular";
import { SvgPlay } from "./components/icons/Play";
import { SvgPolygon } from "./components/icons/Polygon";
import { SvgPrintPreview } from "./components/icons/PrintPreview";
import { SvgPrintSettings } from "./components/icons/PrintSettings";
import { SvgPrint } from "./components/icons/Print";
import { SvgProcess } from "./components/icons/Process";
import { SvgProgressBackwardCircular } from "./components/icons/ProgressBackwardCircular";
import { SvgProgressBackward } from "./components/icons/ProgressBackward";
import { SvgProgressForwardCircular } from "./components/icons/ProgressForwardCircular";
import { SvgProgressForward } from "./components/icons/ProgressForward";
import { SvgPropertiesList } from "./components/icons/PropertiesList";
import { SvgProperties } from "./components/icons/Properties";
import { SvgPuzzle } from "./components/icons/Puzzle";
import { SvgReCenter } from "./components/icons/ReCenter";
import { SvgReadOnly } from "./components/icons/ReadOnly";
import { SvgRecord } from "./components/icons/Record";
import { SvgRecords } from "./components/icons/Records";
import { SvgRectangle } from "./components/icons/Rectangle";
import { SvgRedo } from "./components/icons/Redo";
import { SvgRefresh } from "./components/icons/Refresh";
import { SvgRemove } from "./components/icons/Remove";
import { SvgRename } from "./components/icons/Rename";
import { SvgReorder } from "./components/icons/Reorder";
import { SvgReplace } from "./components/icons/Replace";
import { SvgReports } from "./components/icons/Reports";
import { SvgRoad } from "./components/icons/Road";
import { SvgRotateLeft } from "./components/icons/RotateLeft";
import { SvgRotateRight } from "./components/icons/RotateRight";
import { SvgSaveAs } from "./components/icons/SaveAs";
import { SvgSaveSettings } from "./components/icons/SaveSettings";
import { SvgSaveUpdate } from "./components/icons/SaveUpdate";
import { SvgSave } from "./components/icons/Save";
import { SvgScale } from "./components/icons/Scale";
import { SvgScreenshareStop } from "./components/icons/ScreenshareStop";
import { SvgScreenshare } from "./components/icons/Screenshare";
import { SvgScriptRun } from "./components/icons/ScriptRun";
import { SvgScriptStatus } from "./components/icons/ScriptStatus";
import { SvgScript } from "./components/icons/Script";
import { SvgSearch } from "./components/icons/Search";
import { SvgSelection } from "./components/icons/Selection";
import { SvgSend } from "./components/icons/Send";
import { SvgSettings } from "./components/icons/Settings";
import { SvgSetup } from "./components/icons/Setup";
import { SvgShare } from "./components/icons/Share";
import { SvgSmartphone } from "./components/icons/Smartphone";
import { SvgSmileyHappyHollow } from "./components/icons/SmileyHappyHollow";
import { SvgSmileyHappyVeryHollow } from "./components/icons/SmileyHappyVeryHollow";
import { SvgSmileyHappyVery } from "./components/icons/SmileyHappyVery";
import { SvgSmileyHappy } from "./components/icons/SmileyHappy";
import { SvgSmileyNeutralHollow } from "./components/icons/SmileyNeutralHollow";
import { SvgSmileyNeutral } from "./components/icons/SmileyNeutral";
import { SvgSmileySadHollow } from "./components/icons/SmileySadHollow";
import { SvgSmileySadVeryHollow } from "./components/icons/SmileySadVeryHollow";
import { SvgSmileySadVery } from "./components/icons/SmileySadVery";
import { SvgSmileySad } from "./components/icons/SmileySad";
import { SvgSortDown } from "./components/icons/SortDown";
import { SvgSortMenu } from "./components/icons/SortMenu";
import { SvgSortUp } from "./components/icons/SortUp";
import { SvgSoundLoud } from "./components/icons/SoundLoud";
import { SvgSoundMute } from "./components/icons/SoundMute";
import { SvgSoundQuiet } from "./components/icons/SoundQuiet";
import { SvgSpin } from "./components/icons/Spin";
import { SvgStarHollow } from "./components/icons/StarHollow";
import { SvgStar } from "./components/icons/Star";
import { SvgStatusDraft } from "./components/icons/StatusDraft";
import { SvgStatusErrorHollow } from "./components/icons/StatusErrorHollow";
import { SvgStatusError } from "./components/icons/StatusError";
import { SvgStatusPendingHollow } from "./components/icons/StatusPendingHollow";
import { SvgStatusPending } from "./components/icons/StatusPending";
import { SvgStatusRejectedHollow } from "./components/icons/StatusRejectedHollow";
import { SvgStatusRejected } from "./components/icons/StatusRejected";
import { SvgStatusRunning } from "./components/icons/StatusRunning";
import { SvgStatusSuccessHollow } from "./components/icons/StatusSuccessHollow";
import { SvgStatusSuccess } from "./components/icons/StatusSuccess";
import { SvgStatusUpdate } from "./components/icons/StatusUpdate";
import { SvgStatusWarning } from "./components/icons/StatusWarning";
import { SvgStopCircular } from "./components/icons/StopCircular";
import { SvgStop } from "./components/icons/Stop";
import { SvgSun } from "./components/icons/Sun";
import { SvgSyncDisabled } from "./components/icons/SyncDisabled";
import { SvgSync } from "./components/icons/Sync";
import { SvgTableOfContents } from "./components/icons/TableOfContents";
import { SvgTable } from "./components/icons/Table";
import { SvgTag } from "./components/icons/Tag";
import { SvgTechnicalPreviewBadgeBw } from "./components/icons/TechnicalPreviewBadgeBw";
import { SvgTechnicalPreviewBw } from "./components/icons/TechnicalPreviewBw";
import { SvgTechnicalPreviewMiniBw } from "./components/icons/TechnicalPreviewMiniBw";
import { SvgTextAlignCenter } from "./components/icons/TextAlignCenter";
import { SvgTextAlignJustify } from "./components/icons/TextAlignJustify";
import { SvgTextAlignLeft } from "./components/icons/TextAlignLeft";
import { SvgTextAlignRight } from "./components/icons/TextAlignRight";
import { SvgTextMedium } from "./components/icons/TextMedium";
import { SvgTextSmall } from "./components/icons/TextSmall";
import { SvgText } from "./components/icons/Text";
import { SvgThumbnails } from "./components/icons/Thumbnails";
import { SvgTimer } from "./components/icons/Timer";
import { SvgTransparency } from "./components/icons/Transparency";
import { SvgUnderline } from "./components/icons/Underline";
import { SvgUndo } from "./components/icons/Undo";
import { SvgUnlink } from "./components/icons/Unlink";
import { SvgUpgrade } from "./components/icons/Upgrade";
import { SvgUploadToCloud } from "./components/icons/UploadToCloud";
import { SvgUpload } from "./components/icons/Upload";
import { SvgUserAdd } from "./components/icons/UserAdd";
import { SvgUser } from "./components/icons/User";
import { SvgUsers } from "./components/icons/Users";
import { SvgValidate } from "./components/icons/Validate";
import { SvgVisibilityHalf } from "./components/icons/VisibilityHalf";
import { SvgVisibilityHide } from "./components/icons/VisibilityHide";
import { SvgVisibilityShow } from "./components/icons/VisibilityShow";
import { SvgWalk } from "./components/icons/Walk";
import { SvgWifiDisabled } from "./components/icons/WifiDisabled";
import { SvgWifi } from "./components/icons/Wifi";
import { SvgWindowAdd } from "./components/icons/WindowAdd";
import { SvgWindowArea } from "./components/icons/WindowArea";
import { SvgWindowBackward } from "./components/icons/WindowBackward";
import { SvgWindowCollapse } from "./components/icons/WindowCollapse";
import { SvgWindowForward } from "./components/icons/WindowForward";
import { SvgWindowFullScreen } from "./components/icons/WindowFullScreen";
import { SvgWindowMaximize } from "./components/icons/WindowMaximize";
import { SvgWindowMinimize } from "./components/icons/WindowMinimize";
import { SvgWindowPopout } from "./components/icons/WindowPopout";
import { SvgWindowSettings } from "./components/icons/WindowSettings";
import { SvgWindowSplitHorizontal } from "./components/icons/WindowSplitHorizontal";
import { SvgWindowSplitVertical } from "./components/icons/WindowSplitVertical";
import { SvgWindowZoomIn } from "./components/icons/WindowZoomIn";
import { SvgWindowZoomOut } from "./components/icons/WindowZoomOut";
import { SvgWindow } from "./components/icons/Window";
import { SvgWindows } from "./components/icons/Windows";
import { SvgZoomInCircular } from "./components/icons/ZoomInCircular";
import { SvgZoomIn } from "./components/icons/ZoomIn";
import { SvgZoomOutCircular } from "./components/icons/ZoomOutCircular";
import { SvgZoomOut } from "./components/icons/ZoomOut";
import { SvgZoomSearch } from "./components/icons/ZoomSearch";

export const HelloWorld = defineComponent({
  setup() {
    return () => (
      <div class="hello">
        <div title="2d"><Svg2d /></div>
<div title="3d"><Svg3d /></div>
<div title="Activity"><SvgActivity /></div>
<div title="AddCircular"><SvgAddCircular /></div>
<div title="Add"><SvgAdd /></div>
<div title="Airplane"><SvgAirplane /></div>
<div title="AlignBottom"><SvgAlignBottom /></div>
<div title="AlignCenterHorizontal"><SvgAlignCenterHorizontal /></div>
<div title="AlignCenterVertical"><SvgAlignCenterVertical /></div>
<div title="AlignLeft"><SvgAlignLeft /></div>
<div title="AlignRight"><SvgAlignRight /></div>
<div title="AlignTop"><SvgAlignTop /></div>
<div title="Android"><SvgAndroid /></div>
<div title="Annotation"><SvgAnnotation /></div>
<div title="Apple"><SvgApple /></div>
<div title="Archive"><SvgArchive /></div>
<div title="ArrowDown"><SvgArrowDown /></div>
<div title="ArrowLeft"><SvgArrowLeft /></div>
<div title="ArrowRight"><SvgArrowRight /></div>
<div title="ArrowUp"><SvgArrowUp /></div>
<div title="Attach"><SvgAttach /></div>
<div title="Automatic"><SvgAutomatic /></div>
<div title="Away"><SvgAway /></div>
<div title="Basket"><SvgBasket /></div>
<div title="BentleySystems"><SvgBentleySystems /></div>
<div title="Blank"><SvgBlank /></div>
<div title="Bolt"><SvgBolt /></div>
<div title="Bookmark"><SvgBookmark /></div>
<div title="Calendar"><SvgCalendar /></div>
<div title="CameraAnimation"><SvgCameraAnimation /></div>
<div title="Camera"><SvgCamera /></div>
<div title="CaretDownSmall"><SvgCaretDownSmall /></div>
<div title="CaretDown"><SvgCaretDown /></div>
<div title="CaretLeftSmall"><SvgCaretLeftSmall /></div>
<div title="CaretLeft"><SvgCaretLeft /></div>
<div title="CaretRightSmall"><SvgCaretRightSmall /></div>
<div title="CaretRight"><SvgCaretRight /></div>
<div title="CaretUpSmall"><SvgCaretUpSmall /></div>
<div title="CaretUp"><SvgCaretUp /></div>
<div title="Charts"><SvgCharts /></div>
<div title="Chat"><SvgChat /></div>
<div title="CheckmarkSmall"><SvgCheckmarkSmall /></div>
<div title="Checkmark"><SvgCheckmark /></div>
<div title="ChevronDown"><SvgChevronDown /></div>
<div title="ChevronLeftDouble"><SvgChevronLeftDouble /></div>
<div title="ChevronLeft"><SvgChevronLeft /></div>
<div title="ChevronRightDouble"><SvgChevronRightDouble /></div>
<div title="ChevronRight"><SvgChevronRight /></div>
<div title="ChevronUp"><SvgChevronUp /></div>
<div title="Circle"><SvgCircle /></div>
<div title="Clipboard"><SvgClipboard /></div>
<div title="Clock"><SvgClock /></div>
<div title="CloseCircular"><SvgCloseCircular /></div>
<div title="CloseSmall"><SvgCloseSmall /></div>
<div title="Close"><SvgClose /></div>
<div title="CloudDownload"><SvgCloudDownload /></div>
<div title="CloudUpload"><SvgCloudUpload /></div>
<div title="Cloud"><SvgCloud /></div>
<div title="CollapseAll"><SvgCollapseAll /></div>
<div title="Collapse"><SvgCollapse /></div>
<div title="ColumnManager"><SvgColumnManager /></div>
<div title="Compare"><SvgCompare /></div>
<div title="Computer"><SvgComputer /></div>
<div title="Copy"><SvgCopy /></div>
<div title="Crop"><SvgCrop /></div>
<div title="CursorClick"><SvgCursorClick /></div>
<div title="Cursor"><SvgCursor /></div>
<div title="Cut"><SvgCut /></div>
<div title="Database"><SvgDatabase /></div>
<div title="Delete"><SvgDelete /></div>
<div title="Details"><SvgDetails /></div>
<div title="Developer"><SvgDeveloper /></div>
<div title="Disconnect"><SvgDisconnect /></div>
<div title="DistributeBottom"><SvgDistributeBottom /></div>
<div title="DistributeCenterHorizontal"><SvgDistributeCenterHorizontal /></div>
<div title="DistributeCenterVertical"><SvgDistributeCenterVertical /></div>
<div title="DistributeLeft"><SvgDistributeLeft /></div>
<div title="DistributeRight"><SvgDistributeRight /></div>
<div title="DistributeTop"><SvgDistributeTop /></div>
<div title="DocumentLock"><SvgDocumentLock /></div>
<div title="DocumentReference"><SvgDocumentReference /></div>
<div title="Document"><SvgDocument /></div>
<div title="Documentation"><SvgDocumentation /></div>
<div title="Download"><SvgDownload /></div>
<div title="DragHandle"><SvgDragHandle /></div>
<div title="Draw"><SvgDraw /></div>
<div title="Duplicate"><SvgDuplicate /></div>
<div title="EditAll"><SvgEditAll /></div>
<div title="Edit"><SvgEdit /></div>
<div title="Ellipse"><SvgEllipse /></div>
<div title="EmailAt"><SvgEmailAt /></div>
<div title="Email"><SvgEmail /></div>
<div title="Exit"><SvgExit /></div>
<div title="ExpandAll"><SvgExpandAll /></div>
<div title="Expand"><SvgExpand /></div>
<div title="Export"><SvgExport /></div>
<div title="EyedropperDrop"><SvgEyedropperDrop /></div>
<div title="EyedropperFilled"><SvgEyedropperFilled /></div>
<div title="Eyedropper"><SvgEyedropper /></div>
<div title="FastBackward"><SvgFastBackward /></div>
<div title="FastForward"><SvgFastForward /></div>
<div title="Feedback"><SvgFeedback /></div>
<div title="FilterHollow"><SvgFilterHollow /></div>
<div title="Filter"><SvgFilter /></div>
<div title="Find"><SvgFind /></div>
<div title="FireExtinguisher"><SvgFireExtinguisher /></div>
<div title="FitToView"><SvgFitToView /></div>
<div title="Flag"><SvgFlag /></div>
<div title="FolderAdd"><SvgFolderAdd /></div>
<div title="FolderBrowse"><SvgFolderBrowse /></div>
<div title="FolderChevronDown"><SvgFolderChevronDown /></div>
<div title="FolderChevronUp"><SvgFolderChevronUp /></div>
<div title="FolderExport"><SvgFolderExport /></div>
<div title="FolderImport"><SvgFolderImport /></div>
<div title="FolderLock"><SvgFolderLock /></div>
<div title="FolderMinimize"><SvgFolderMinimize /></div>
<div title="FolderOpened"><SvgFolderOpened /></div>
<div title="FolderRemove"><SvgFolderRemove /></div>
<div title="FolderShortcut"><SvgFolderShortcut /></div>
<div title="Folder"><SvgFolder /></div>
<div title="FontBold"><SvgFontBold /></div>
<div title="FontColor"><SvgFontColor /></div>
<div title="FontItalic"><SvgFontItalic /></div>
<div title="FontSize"><SvgFontSize /></div>
<div title="FrameBackward"><SvgFrameBackward /></div>
<div title="FrameForward"><SvgFrameForward /></div>
<div title="Function"><SvgFunction /></div>
<div title="GestureOneFingerDrag"><SvgGestureOneFingerDrag /></div>
<div title="GestureOneFingerTapDouble"><SvgGestureOneFingerTapDouble /></div>
<div title="GestureOneFingerTap"><SvgGestureOneFingerTap /></div>
<div title="GesturePinch"><SvgGesturePinch /></div>
<div title="GestureTouch"><SvgGestureTouch /></div>
<div title="GestureTwoFingerDrag"><SvgGestureTwoFingerDrag /></div>
<div title="GestureTwoFingerTap"><SvgGestureTwoFingerTap /></div>
<div title="GestureTwoFinger"><SvgGestureTwoFinger /></div>
<div title="Globe"><SvgGlobe /></div>
<div title="GoToEnd"><SvgGoToEnd /></div>
<div title="GoToStart"><SvgGoToStart /></div>
<div title="GraphBar"><SvgGraphBar /></div>
<div title="GraphPieChart"><SvgGraphPieChart /></div>
<div title="GraphScatterChart"><SvgGraphScatterChart /></div>
<div title="Graph"><SvgGraph /></div>
<div title="Grid"><SvgGrid /></div>
<div title="GroupUngroup"><SvgGroupUngroup /></div>
<div title="Group"><SvgGroup /></div>
<div title="Hand"><SvgHand /></div>
<div title="Heart"><SvgHeart /></div>
<div title="HelpCircularHollow"><SvgHelpCircularHollow /></div>
<div title="HelpCircular"><SvgHelpCircular /></div>
<div title="History"><SvgHistory /></div>
<div title="Home"><SvgHome /></div>
<div title="Hourglass"><SvgHourglass /></div>
<div title="IBeam"><SvgIBeam /></div>
<div title="ImageFrame"><SvgImageFrame /></div>
<div title="Image"><SvgImage /></div>
<div title="ImodelHollow"><SvgImodelHollow /></div>
<div title="Imodel"><SvgImodel /></div>
<div title="Import"><SvgImport /></div>
<div title="ImportantSmall"><SvgImportantSmall /></div>
<div title="ImportantVery"><SvgImportantVery /></div>
<div title="Important"><SvgImportant /></div>
<div title="InfoCircularHollow"><SvgInfoCircularHollow /></div>
<div title="InfoCircular"><SvgInfoCircular /></div>
<div title="Info"><SvgInfo /></div>
<div title="Install"><SvgInstall /></div>
<div title="IssueReport"><SvgIssueReport /></div>
<div title="Item"><SvgItem /></div>
<div title="Label"><SvgLabel /></div>
<div title="Layers"><SvgLayers /></div>
<div title="LightbulbHollow"><SvgLightbulbHollow /></div>
<div title="Lightbulb"><SvgLightbulb /></div>
<div title="Line"><SvgLine /></div>
<div title="Link"><SvgLink /></div>
<div title="List"><SvgList /></div>
<div title="Location"><SvgLocation /></div>
<div title="LockUnlocked"><SvgLockUnlocked /></div>
<div title="Lock"><SvgLock /></div>
<div title="Loop"><SvgLoop /></div>
<div title="Maintenance"><SvgMaintenance /></div>
<div title="Manager"><SvgManager /></div>
<div title="Map"><SvgMap /></div>
<div title="Measure"><SvgMeasure /></div>
<div title="Menu"><SvgMenu /></div>
<div title="Merge"><SvgMerge /></div>
<div title="Minimize"><SvgMinimize /></div>
<div title="Model"><SvgModel /></div>
<div title="Moon"><SvgMoon /></div>
<div title="MoreCircular"><SvgMoreCircular /></div>
<div title="MoreSmall"><SvgMoreSmall /></div>
<div title="MoreVerticalCircular"><SvgMoreVerticalCircular /></div>
<div title="MoreVerticalSmall"><SvgMoreVerticalSmall /></div>
<div title="MoreVertical"><SvgMoreVertical /></div>
<div title="More"><SvgMore /></div>
<div title="MouseClickLeft"><SvgMouseClickLeft /></div>
<div title="MouseClickRight"><SvgMouseClickRight /></div>
<div title="MouseClickWheel"><SvgMouseClickWheel /></div>
<div title="MouseClick"><SvgMouseClick /></div>
<div title="Move"><SvgMove /></div>
<div title="NamedVersionAdd"><SvgNamedVersionAdd /></div>
<div title="Network"><SvgNetwork /></div>
<div title="New"><SvgNew /></div>
<div title="NotificationSettings"><SvgNotificationSettings /></div>
<div title="Notification"><SvgNotification /></div>
<div title="ObjectMove"><SvgObjectMove /></div>
<div title="ObjectRotate"><SvgObjectRotate /></div>
<div title="ObjectScale"><SvgObjectScale /></div>
<div title="Offline"><SvgOffline /></div>
<div title="Paintbrush"><SvgPaintbrush /></div>
<div title="Palette"><SvgPalette /></div>
<div title="PanoramaModel"><SvgPanoramaModel /></div>
<div title="Panorama"><SvgPanorama /></div>
<div title="PasteHollow"><SvgPasteHollow /></div>
<div title="Paste"><SvgPaste /></div>
<div title="PauseCircular"><SvgPauseCircular /></div>
<div title="Pause"><SvgPause /></div>
<div title="Perspective"><SvgPerspective /></div>
<div title="Pin"><SvgPin /></div>
<div title="Placeholder"><SvgPlaceholder /></div>
<div title="PlayBackward"><SvgPlayBackward /></div>
<div title="PlayCircular"><SvgPlayCircular /></div>
<div title="Play"><SvgPlay /></div>
<div title="Polygon"><SvgPolygon /></div>
<div title="PrintPreview"><SvgPrintPreview /></div>
<div title="PrintSettings"><SvgPrintSettings /></div>
<div title="Print"><SvgPrint /></div>
<div title="Process"><SvgProcess /></div>
<div title="ProgressBackwardCircular"><SvgProgressBackwardCircular /></div>
<div title="ProgressBackward"><SvgProgressBackward /></div>
<div title="ProgressForwardCircular"><SvgProgressForwardCircular /></div>
<div title="ProgressForward"><SvgProgressForward /></div>
<div title="PropertiesList"><SvgPropertiesList /></div>
<div title="Properties"><SvgProperties /></div>
<div title="Puzzle"><SvgPuzzle /></div>
<div title="ReCenter"><SvgReCenter /></div>
<div title="ReadOnly"><SvgReadOnly /></div>
<div title="Record"><SvgRecord /></div>
<div title="Records"><SvgRecords /></div>
<div title="Rectangle"><SvgRectangle /></div>
<div title="Redo"><SvgRedo /></div>
<div title="Refresh"><SvgRefresh /></div>
<div title="Remove"><SvgRemove /></div>
<div title="Rename"><SvgRename /></div>
<div title="Reorder"><SvgReorder /></div>
<div title="Replace"><SvgReplace /></div>
<div title="Reports"><SvgReports /></div>
<div title="Road"><SvgRoad /></div>
<div title="RotateLeft"><SvgRotateLeft /></div>
<div title="RotateRight"><SvgRotateRight /></div>
<div title="SaveAs"><SvgSaveAs /></div>
<div title="SaveSettings"><SvgSaveSettings /></div>
<div title="SaveUpdate"><SvgSaveUpdate /></div>
<div title="Save"><SvgSave /></div>
<div title="Scale"><SvgScale /></div>
<div title="ScreenshareStop"><SvgScreenshareStop /></div>
<div title="Screenshare"><SvgScreenshare /></div>
<div title="ScriptRun"><SvgScriptRun /></div>
<div title="ScriptStatus"><SvgScriptStatus /></div>
<div title="Script"><SvgScript /></div>
<div title="Search"><SvgSearch /></div>
<div title="Selection"><SvgSelection /></div>
<div title="Send"><SvgSend /></div>
<div title="Settings"><SvgSettings /></div>
<div title="Setup"><SvgSetup /></div>
<div title="Share"><SvgShare /></div>
<div title="Smartphone"><SvgSmartphone /></div>
<div title="SmileyHappyHollow"><SvgSmileyHappyHollow /></div>
<div title="SmileyHappyVeryHollow"><SvgSmileyHappyVeryHollow /></div>
<div title="SmileyHappyVery"><SvgSmileyHappyVery /></div>
<div title="SmileyHappy"><SvgSmileyHappy /></div>
<div title="SmileyNeutralHollow"><SvgSmileyNeutralHollow /></div>
<div title="SmileyNeutral"><SvgSmileyNeutral /></div>
<div title="SmileySadHollow"><SvgSmileySadHollow /></div>
<div title="SmileySadVeryHollow"><SvgSmileySadVeryHollow /></div>
<div title="SmileySadVery"><SvgSmileySadVery /></div>
<div title="SmileySad"><SvgSmileySad /></div>
<div title="SortDown"><SvgSortDown /></div>
<div title="SortMenu"><SvgSortMenu /></div>
<div title="SortUp"><SvgSortUp /></div>
<div title="SoundLoud"><SvgSoundLoud /></div>
<div title="SoundMute"><SvgSoundMute /></div>
<div title="SoundQuiet"><SvgSoundQuiet /></div>
<div title="Spin"><SvgSpin /></div>
<div title="StarHollow"><SvgStarHollow /></div>
<div title="Star"><SvgStar /></div>
<div title="StatusDraft"><SvgStatusDraft /></div>
<div title="StatusErrorHollow"><SvgStatusErrorHollow /></div>
<div title="StatusError"><SvgStatusError /></div>
<div title="StatusPendingHollow"><SvgStatusPendingHollow /></div>
<div title="StatusPending"><SvgStatusPending /></div>
<div title="StatusRejectedHollow"><SvgStatusRejectedHollow /></div>
<div title="StatusRejected"><SvgStatusRejected /></div>
<div title="StatusRunning"><SvgStatusRunning /></div>
<div title="StatusSuccessHollow"><SvgStatusSuccessHollow /></div>
<div title="StatusSuccess"><SvgStatusSuccess /></div>
<div title="StatusUpdate"><SvgStatusUpdate /></div>
<div title="StatusWarning"><SvgStatusWarning /></div>
<div title="StopCircular"><SvgStopCircular /></div>
<div title="Stop"><SvgStop /></div>
<div title="Sun"><SvgSun /></div>
<div title="SyncDisabled"><SvgSyncDisabled /></div>
<div title="Sync"><SvgSync /></div>
<div title="TableOfContents"><SvgTableOfContents /></div>
<div title="Table"><SvgTable /></div>
<div title="Tag"><SvgTag /></div>
<div title="TechnicalPreviewBadgeBw"><SvgTechnicalPreviewBadgeBw /></div>
<div title="TechnicalPreviewBw"><SvgTechnicalPreviewBw /></div>
<div title="TechnicalPreviewMiniBw"><SvgTechnicalPreviewMiniBw /></div>
<div title="TextAlignCenter"><SvgTextAlignCenter /></div>
<div title="TextAlignJustify"><SvgTextAlignJustify /></div>
<div title="TextAlignLeft"><SvgTextAlignLeft /></div>
<div title="TextAlignRight"><SvgTextAlignRight /></div>
<div title="TextMedium"><SvgTextMedium /></div>
<div title="TextSmall"><SvgTextSmall /></div>
<div title="Text"><SvgText /></div>
<div title="Thumbnails"><SvgThumbnails /></div>
<div title="Timer"><SvgTimer /></div>
<div title="Transparency"><SvgTransparency /></div>
<div title="Underline"><SvgUnderline /></div>
<div title="Undo"><SvgUndo /></div>
<div title="Unlink"><SvgUnlink /></div>
<div title="Upgrade"><SvgUpgrade /></div>
<div title="UploadToCloud"><SvgUploadToCloud /></div>
<div title="Upload"><SvgUpload /></div>
<div title="UserAdd"><SvgUserAdd /></div>
<div title="User"><SvgUser /></div>
<div title="Users"><SvgUsers /></div>
<div title="Validate"><SvgValidate /></div>
<div title="VisibilityHalf"><SvgVisibilityHalf /></div>
<div title="VisibilityHide"><SvgVisibilityHide /></div>
<div title="VisibilityShow"><SvgVisibilityShow /></div>
<div title="Walk"><SvgWalk /></div>
<div title="WifiDisabled"><SvgWifiDisabled /></div>
<div title="Wifi"><SvgWifi /></div>
<div title="WindowAdd"><SvgWindowAdd /></div>
<div title="WindowArea"><SvgWindowArea /></div>
<div title="WindowBackward"><SvgWindowBackward /></div>
<div title="WindowCollapse"><SvgWindowCollapse /></div>
<div title="WindowForward"><SvgWindowForward /></div>
<div title="WindowFullScreen"><SvgWindowFullScreen /></div>
<div title="WindowMaximize"><SvgWindowMaximize /></div>
<div title="WindowMinimize"><SvgWindowMinimize /></div>
<div title="WindowPopout"><SvgWindowPopout /></div>
<div title="WindowSettings"><SvgWindowSettings /></div>
<div title="WindowSplitHorizontal"><SvgWindowSplitHorizontal /></div>
<div title="WindowSplitVertical"><SvgWindowSplitVertical /></div>
<div title="WindowZoomIn"><SvgWindowZoomIn /></div>
<div title="WindowZoomOut"><SvgWindowZoomOut /></div>
<div title="Window"><SvgWindow /></div>
<div title="Windows"><SvgWindows /></div>
<div title="ZoomInCircular"><SvgZoomInCircular /></div>
<div title="ZoomIn"><SvgZoomIn /></div>
<div title="ZoomOutCircular"><SvgZoomOutCircular /></div>
<div title="ZoomOut"><SvgZoomOut /></div>
<div title="ZoomSearch"><SvgZoomSearch /></div>

      </div>
    );
  },
});