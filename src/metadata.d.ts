// based on https://github.com/YourMJK/dreimetadaten/blob/master/web/data/metadata_structure.swift

interface Hoereinheit {
	teile?: never;
	titel?: string;
	autor?: string;
	beschreibung?: string;
	unvollstaendig?: boolean;
	links?: Links;
}

interface Folge extends Hoereinheit {
	nummer: number;
}

interface Links {
	json?: string,
	ffmetadata?: never;
	xld_log?: never;
	cover?: string;
	cover_itunes?: string;
	cover_kosmos?: string;
}