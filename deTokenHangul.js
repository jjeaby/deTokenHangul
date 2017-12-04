
JosaCorrection = (txt, josa) => {
	var code = txt.charCodeAt(txt.length-1) - 44032;
	var cho = 19, jung = 21, jong=28;
	var i1, i2, code1, code2;

	// 원본 문구가 없을때는 빈 문자열 반환
	if (txt.length == 0) return '';

	// 한글이 아닐때
	if (code < 0 || code > 11171) return txt;

	if (code % 28 == 0) return txt + JosaCorrection.get(josa, false);
	else return txt + JosaCorrection.get(josa, true);
}


JosaCorrection.get = (josa, jong) => {
	// jong : true면 받침있음, false면 받침없음

	if (josa == '을' || josa == '를') return (jong?'을':'를');
	if (josa == '이' || josa == '가') return (jong?'이':'가');
	if (josa == '은' || josa == '는') return (jong?'은':'는');
	if (josa == '와' || josa == '과') return (jong?'와':'과');
	
	// 알 수 없는 조사
	return '**';
}



isJongsung = (char) => {
    const no_jongsung = "가갸거겨고교구규그기개걔게계과괘궈궤괴귀긔까꺄꺼껴꼬꾜꾸뀨끄끼깨꺠께꼐꽈꽤꿔꿰꾀뀌끠나냐너녀노뇨누뉴느니내냬네녜놔놰눠눼뇌뉘늬다댜더뎌도됴두듀드디대댸데뎨돠돼둬뒈되뒤듸따땨떠뗘또뚀뚜뜌뜨띠때떄떼뗴똬뙈뚸뛔뙤뛰띄라랴러려로료루류르리래럐레례롸뢔뤄뤠뢰뤼릐마먀머며모묘무뮤므미매먜메몌뫄뫠뭐뭬뫼뮈믜바뱌버벼보뵤부뷰브비배뱨베볘봐봬붜붸뵈뷔븨빠뺘뻐뼈뽀뾰뿌쀼쁘삐빼뺴뻬뼤뽜뽸뿨쀄뾔쀠쁴사샤서셔소쇼수슈스시새섀세셰솨쇄숴쉐쇠쉬싀싸쌰써쎠쏘쑈쑤쓔쓰씨쌔썌쎄쎼쏴쐐쒀쒜쐬쒸씌아야어여오요우유으이애얘에예와왜워웨외위의자쟈저져조죠주쥬즈지재쟤제졔좌좨줘줴죄쥐즤짜쨔쩌쪄쪼쬬쭈쮸쯔찌째쨰쩨쪠쫘쫴쭤쮀쬐쮜쯰차챠처쳐초쵸추츄츠치채챼체쳬촤쵀춰췌최취츼카캬커켜코쿄쿠큐크키캐컈케켸콰쾌쿼퀘쾨퀴킈타탸터텨토툐투튜트티태턔테톄톼퇘퉈퉤퇴튀틔파퍄퍼펴포표푸퓨프피패퍠페폐퐈퐤풔풰푀퓌픠하햐허혀호효후휴흐히해햬헤혜화홰훠훼회휘희2459"
    return no_jongsung.indexOf(char) === false ? true : false
}

select_marker = (word, have_jongsung, no_jongsung) =>  {
    last_chr = word.slice(0,-1);
    return isJongsung(last_chr) ? word + have_jongsung : word + no_jongsung
}




console.log(JosaCorrection('태극기', '은') )
console.log(isJongsung('는'))
console.log(select_marker('태극기', '은', '는'))
