/* Centers */

INSERT INTO centers (id, name, email, phone, address)
VALUES ('04279cb8-312a-488a-a14b-fbe44165af77', 'Catlike Centre', 'example@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 1 Casa');

INSERT INTO centers (id, name, email, phone, address)
VALUES ('378211fd-344f-44ad-ba71-bf58bf957a67', 'Doglike Centre', 'example@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 2 Casa');

INSERT INTO centers (id, name, email, phone, address)
VALUES ('45398a6b-6582-4bbc-abda-84f97a8b1a15', 'Amazing Centre', 'example@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 3 Casa');

INSERT INTO centers (id, name, email, phone, address)
VALUES ('0c266122-e95f-4a7c-88b6-5794c281896a', 'Fullstack Centre', 'example@email.com', '+34 999 99 99 99', 'Dirección de Ejemplo, 4 Casa');

/*Users*/

INSERT INTO users(email,password,center)
VALUES('jordi@gmail.com','12345','04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO users(email,password,center)
VALUES('ana@gmail.com','12345','378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO users(email,password,center)
VALUES('toni@gmail.com','12345','45398a6b-6582-4bbc-abda-84f97a8b1a15');

INSERT INTO users(email,password,center)
VALUES('pepa@gmail.com','12345','0c266122-e95f-4a7c-88b6-5794c281896a');


/* Animals */

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('67279080-ed54-4388-955b-bcac6a944bac', 'Silhouette', 'dog', '2018-06-18', 'male', 'new', 2, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('82457f55-dfcf-47c1-baad-27b384e5267f', 'Stripes', 'cat', '2019-12-19', 'male', 'new', 10, 'Lorem ipsum...', '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('97f0b852-1a87-499d-99a6-4d4ef87a45f3', 'Scratchy', 'dog', '2020-02-20', 'male', 'new', 2, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('bce50bc3-f226-4192-b2da-d57f415d2c68', 'Shorty', 'cat', '2015-06-15', 'male', 'new', 40, 'Lorem ipsum...', '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('2bcca779-f3e8-40ea-8f2d-f9c4bfbf76c9','Scarlett', 'dog', '2014-10-14', 'female', 'new', 24, 'Lorem ipsum...', ARRAY ['docil', 'cariñoso', 'bueno'], '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('bcf95a9d-89bb-4717-8bb8-e911dc3485e0', 'Winnie', 'cat', '2020-02-20', 'female', 'new', 2, 'Lorem ipsum...', null, '45398a6b-6582-4bbc-abda-84f97a8b1a15');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('99ab7f1a-2b2c-451c-a6d1-5a3835222c71', 'Decopatch', 'dog', '2010-08-25', 'female', 'new', 3, 'Lorem ipsum...', '0c266122-e95f-4a7c-88b6-5794c281896a');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('77844cae-7ac7-4bea-8f36-fccbeed351a8', 'Dot', 'cat', '2017-02-20', 'female', 'new', 2, 'Lorem ipsum...', ARRAY ['le gusta jugar'], '0c266122-e95f-4a7c-88b6-5794c281896a');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('efa4c527-048d-492c-9d9b-2a5b7ffe6645', 'Olive', 'dog', '2012-02-08', 'male', 'urgent', 20, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, tags, center)
VALUES ('80111f08-975f-4d55-9932-0517da0b7872', 'Ash', 'cat', '2020-02-20', 'male', 'urgent', 2, 'Lorem ipsum...', ARRAY ['agil'], '45398a6b-6582-4bbc-abda-84f97a8b1a15');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('a02f3dbb-4372-499b-ac78-917486e6dd33', 'Panther', 'dog', '2018-04-23', 'male', 'urgent', 20, 'Lorem ipsum...', '45398a6b-6582-4bbc-abda-84f97a8b1a15');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('b15bfe36-b2ed-42f9-8f8c-1d5d0379b101', 'Charlie', 'cat', '2017-02-20', 'male', 'urgent', 7, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('0064a138-9f99-4399-a799-4f904e0016a8', 'Blackie', 'dog', '2009-12-15', 'female', 'urgent', 20, 'Lorem ipsum...', '378211fd-344f-44ad-ba71-bf58bf957a67');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('67a4a166-07d3-442a-91d6-a0eae6a96a6f', 'Blanco', 'cat', '2021-02-20', 'female', 'urgent', 9, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('b35dabe7-1d7f-4d9b-83ec-0046e1ea9320', 'Domino', 'cat', '2016-05-20', 'female', 'urgent', 20, 'Lorem ipsum...', '04279cb8-312a-488a-a14b-fbe44165af77');

INSERT INTO animals (id, name, species, birthdate, gender, status, location, description, center)
VALUES ('6135e303-2b2c-4140-abfd-a4a6dfda3459', 'Oreo', 'cat', '2014-11-23', 'female', 'urgent', 15, 'Lorem ipsum...', '0c266122-e95f-4a7c-88b6-5794c281896a');
