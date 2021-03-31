import moment from 'moment';

export const generateContentXml = (name: string): string => `<?xml version="1.0" encoding="UTF-8"?>
<CDataFileMgr__ContentsOfDataFileXml>
  <disabledFiles />
  <includedXmlFiles />
  <includedDataFiles />
  <dataFiles>
    <Item>
      <filename>dlc_${name}:/%PLATFORM%/replacement.rpf</filename>
      <fileType>RPF_FILE</fileType>
      <locked value="true"/>
	    <disabled value="true"/>
	    <persistent value="true"/>
	    <overlay value="true"/>
    </Item>
  </dataFiles>
  <contentChangeSets>
	<Item>
	  <changeSetName>${name}_STREAM</changeSetName>
	  <filesToDisable />
	  <filesToEnable>
      <Item>dlc_${name}:/%PLATFORM%/replacement.rpf</Item>
	  </filesToEnable>
	  <txdToLoad />
	  <txdToUnload />
	  <residentResources />
	  <unregisterResources />
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
	<contentChangeSets />
	<contentChangeSetGroups>
		<Item>
      <NameHash>GROUP_MAP</NameHash>
      <ContentChangeSets>
        <Item>${name}_MAP</Item>
      </ContentChangeSets>
    </Item>
	</contentChangeSetGroups>
	<startupScript />
	<scriptCallstackSize value="0" />
	<type>EXTRACONTENT_COMPAT_PACK</type>
	<order value="25" />
	<minorOrder value="0" />
	<isLevelPack value="false" />
	<dependencyPackHash />
	<requiredVersion />
	<subPackCount value="0" />
</SSetupData>`;
