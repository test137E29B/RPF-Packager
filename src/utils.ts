import moment from 'moment';

export const generateContentXml = (name: string): string => `<?xml version="1.0" encoding="UTF-8"?>
<CDataFileMgr__ContentsOfDataFileXml>
	<disabledFiles />
	<includedXmlFiles />
	<includedDataFiles />
	<dataFiles>
	
<!-- maps props rpfs-->
	
		<Item>
			<filename>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_props.rpf</filename>
			<fileType>RPF_FILE</fileType>
			<overlay value="false" />
			<disabled value="false" />
			<persistent value="false" />
		</Item>
		
<!-- maps meta rpfs -->
		
		<Item>
			<filename>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_meta.rpf</filename>
			<fileType>RPF_FILE</fileType>
			<overlay value="false" />
			<disabled value="false" />
			<persistent value="false" />
			<contents>CONTENTS_DLC_MAP_DATA</contents>
		</Item>
		
<!-- interior props -->

		<Item>
			<filename>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_props.rpf</filename>
			<fileType>RPF_FILE</fileType>
			<overlay value="false" />
			<disabled value="false" />
			<persistent value="false" />
		</Item>
		
<!-- interior meta -->

		<Item>
			<filename>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_meta.rpf</filename>
			<fileType>RPF_FILE</fileType>
			<overlay value="false" />
			<disabled value="false" />
			<persistent value="false" />
			<contents>CONTENTS_DLC_MAP_DATA</contents>
		</Item>
	</dataFiles>
	<contentChangeSets>
		<Item>
			<changeSetName>CCS_${name.toUpperCase()}_NG_STREAMING_MAP</changeSetName>
			<filesToEnable>
				<Item>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_props.rpf</Item>
        <Item>dlc_${name}:/%PLATFORM%/levels/gta5/props/map_meta.rpf</Item>
        <Item>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_props.rpf</Item>
				<Item>dlc_${name}:/%PLATFORM%/levels/gta5/interiors/int_meta.rpf</Item>
			</filesToEnable>
			<executionConditions>
				<activeChangesetConditions>
				</activeChangesetConditions>
				<genericConditions>$level=MO_JIM_L11</genericConditions>
			</executionConditions>
		</Item>
	</contentChangeSets>
	<patchFiles />
</CDataFileMgr__ContentsOfDataFileXml>`;

export const generateSetupXml = (name: string): string => `<?xml version="1.0" encoding="UTF-8"?>
<SSetupData>
  <deviceName>dlc_${name}</deviceName>
  <datFile>content.xml</datFile>
  <timeStamp>${moment().format('DD/MM/YYYY HH:mm:ss')}</timeStamp>
  <nameHash>${name}</nameHash>
  <contentChangeSetGroups>
    <Item>
			<NameHash>GROUP_EARLY_ON</NameHash>
			<ContentChangeSets>
				<Item>CCS_${name.toUpperCase()}_NG_INIT</Item>
			</ContentChangeSets>
		</Item>
		<Item>
			<NameHash>GROUP_UPDATE_STREAMING</NameHash>
			<ContentChangeSets>
				<Item>CCS_${name.toUpperCase()}_NG_STREAMING</Item>
				<Item>CCS_${name.toUpperCase()}_NG_STREAMING_MAP</Item>
			</ContentChangeSets>
		</Item>
  </contentChangeSetGroups>
  <startupScript />
	<scriptCallstackSize value="0" />
	<type>EXTRACONTENT_LEVEL_PACK</type>
	<order value="2" />
	<minorOrder value="0" />
	<isLevelPack value="true" />
	<dependencyPackHash />
	<requiredVersion />
	<subPackCount value="0" />
</SSetupData>`;
