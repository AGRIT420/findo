export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Bartosz',
		imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
	}, {
		id: 'u2',
		name: 'OTOZ Animals Schronisko Tomaszów Mazowiecki',
		imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p200x200/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_eui2=AeGly5fZLQUfAKei_EiACEq5Dfw2T_M-BQMN_DZP8z4FA_aLEVK_8e0dKvl_5vxVO0Zn-4OPzQ9pKS0c0XeXd898&_nc_ohc=z1ydC_UL4KsAX_tfrbv&_nc_oc=AQknywM4y1IAQaQZaZkPdtkUmaem060LXSByeTx3pdQXWfxW2_tdzfgRsQIXQK_zV94&_nc_ht=scontent.fkiv3-1.fna&tp=6&oh=69508c88f073f64f432fc1f1ab9299e8&oe=5F9C5FD5',
	}],
	messages: [{
		id: 'm1',
		content: 'Dzień dobry, chciałbym zadać pytanie jakie jest nastawienie pieska do innych zwierząt?',
		createdAt: '2022-04-07T13:36:00',
		user: {
			id: 'u1',
			name: 'Bartosz',
		},
	}, {
		id: 'm2',
		content: 'Dzień dobry, piesek jest przyjaźnie nastawiony do innych psów i kotów',
		createdAt: '2022-04-07T13:42:12',
		user: {
			id: 'u2',
			name: 'OTOZ Animals Schronisko Tomaszów Mazowiecki',
		},
	}, {
		id: 'm3',
		content: 'A jakie zwierzęta Pan posiada?',
		createdAt: '2022-04-07T13:59:20',
		user: {
			id: 'u2',
			name: 'OTOZ Animals Schronisko Tomaszów Mazowiecki',
		},
	}, {
		id: 'm4',
		content: 'To świetna informacja! Posiadam jednego Labradora w podeszłym wieku',
		createdAt: '2022-04-07T14:13:30',
		user: {
			id: 'u1',
			name: 'Bartosz',
		},
	}, {
		id: 'm5',
		content: 'A czy piesek posiada komplet szczepień?',
		createdAt: '2022-04-07T14:23:12',
		user: {
			id: 'u1',
			name: 'Bartosz',
		},
	}, {
		id: 'm6',
		content: 'Tak, wszystkie niezbędne szczepienia zostały przeprowadzone i są odpowiednio udokumentowane',
		createdAt: '2022-04-07T15:01:00',
		user: {
			id: 'u2',
			name: 'OTOZ Animals Schronisko Tomaszów Mazowiecki',
		},
	}, {
		id: 'm7',
		content: 'Dziękuję za informacje. W takim razie podejmę ostateczną decyzję i złożę propozycję spotkania przez formularz ;)',
		createdAt: '2022-04-07T15:35:00',
		user: {
			id: 'u1',
			name: 'Bartosz',
		},
	},/* {
		id: 'm8',
		content: 'Oczywiście, czekamy na kontakt z Pana strony :)',
		createdAt: '2022-04-07T16:01:00',
		user: {
			id: 'u2',
			name: 'OTOZ Animals Schronisko Tomaszów Mazowiecki',
		},
	}*/]
}