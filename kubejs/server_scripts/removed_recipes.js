
ServerEvents.recipes(event => // changed onEvent here
{
	//removed for clarity of other recipes
	event.remove({id: 'minecraft:charcoal'})
	event.remove({id: 'minecraft:lapis_block'})
	event.remove({id: 'minecraft:beacon'})
	event.remove({id: 'minecraft:ender_chest'})
	event.remove({id: 'minecraft:cooked_beef_from_smoking'})
	event.remove({id: 'minecraft:cooked_chicken_from_smoking'})
	event.remove({id: 'minecraft:cooked_cod_from_smoking'})
	event.remove({id: 'minecraft:cooked_mutton_from_smoking'})
	event.remove({id: 'minecraft:cooked_porkchop_from_smoking'})
	event.remove({id: 'minecraft:baked_potato_from_smoking'})
	event.remove({id: 'minecraft:cooked_rabbit_from_smoking'})
	event.remove({id: 'minecraft:cooked_salmon_from_smoking'})
	event.remove({id: 'minecraft:dried_kelp_from_smoking'})
	event.remove({id: 'minecraft:dried_kelp_from_smelting'})
	event.remove({id: 'minecraft:netherite_ingot'})
	event.remove({id: 'minecraft:slime_block'})
	event.remove({id: 'minecraft:repeater'})
	event.remove({id: 'create:smoking/bread'})
	event.remove({id: 'tfc:crafting/vanilla/crafting_table'})
	event.remove({id: 'create:crushing/gravel'})
	event.remove({id: 'create:milling/dripstone_block'})
	event.remove({id: 'create:splashing/sand'})
	event.remove({id: 'create:filling/blaze_cake'})
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.remove({id: 'create:crafting/kinetics/fluid_pipe_vertical'})
	event.remove({id: 'create:item_application/copper_casing_from_wood'})
	event.remove({id: 'create:mixing/chocolate'})
	event.remove({id: 'create:mixing/chocolate_melting'})
	event.remove({id: 'create:mixing/dough_by_mixing'})
	event.remove({id: 'create:mixing/tea'})
	event.remove({id: 'create:mixing/honey'})
	event.remove({id: 'create:compacting/andesite_from_flint'})
	event.remove({id: 'create:compacting/diorite_from_flint'})
	event.remove({id: 'create:compacting/granite_from_flint'})

	event.remove({input: 'minecraft:sugar_cane'})
	event.remove({input: 'minecraft:quartz'})
	event.remove({input: 'minecraft:honeycomb'})
	event.remove({input: 'minecraft:honeycomb_block'})
	event.remove({input: 'create:cinder_flour'})



	event.remove({output: 'minecraft:mossy_cobblestone'})

	// added to this list by Infinity_Broken
	// event.remove({input: 'minecraft:rabbit_hide'})
	// event.remove({output: 'create:item_hatch'})
	event.remove({input: 'minecraft:iron_trapdoor'})
	event.remove({input: 'minecraft:iron_ingot'})
	event.remove({input: 'minecraft:barrel'})
	event.remove({input: 'create:copper_sheet'})
	event.remove({input: 'minecraft:amethyst_shard'})
	event.remove({input: 'create:brass_sheet'})
	event.remove({input: 'create:golden_sheet'})

	event.remove({id: 'create:mixing/cardboard_pulp'})
	event.remove({input: 'create:zinc_nugget'})
	

	//removed to prevent access
	event.remove({id: 'minecraft:coal_block'})
	event.remove({id: 'minecraft:slime_ball'})
	event.remove({id: 'minecraft:honey_bottle'})
	event.remove({id: 'minecraft:netherite_block'})
	event.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
	event.remove({id: 'create:milling/granite'})
	event.remove({id: 'create:crushing/diorite'})
	event.remove({id: 'create:crushing/diorite_recycling'})
	event.remove({id: 'create:mechanical_crafting/wand_of_symmetry'})
	event.remove({id: 'create:crafting/materials/zinc_block_from_compacting'})
	event.remove({id: 'create:crafting/materials/brass_block_from_compacting'})
	event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	event.remove({id: 'create:crafting/kinetics/propeller'})
	event.remove({id: 'create:crafting/kinetics/brass_hand'})
	event.remove({id: 'create:pressing/copper_ingot'})
	event.remove({id: 'create:pressing/brass_ingot'})
	event.remove({id: 'create:pressing/gold_ingot'})
	event.remove({id: 'create:milling/terracotta'})
	event.remove({id: 'create:milling/wool'})
	event.remove({id: 'create:crushing/wool'})
	event.remove({id: 'tfc:scraping/paper'})

	event.remove({output: 'minecraft:gold_ingot'})
	event.remove({output: 'minecraft:gold_nugget'})
	event.remove({output: 'minecraft:iron_ingot'})
	event.remove({output: 'minecraft:iron_nugget'})
	event.remove({output: 'minecraft:copper_ingot'})
	event.remove({output: 'create:copper_nugget'})
	event.remove({output: 'create:zinc_ingot'})
	event.remove({output: 'create:zinc_nugget'})
	event.remove({output: 'create:brass_ingot'})
	event.remove({output: 'create:brass_nugget'})
	event.remove({output: 'create:experience_nugget'})


	// console.log('Hello! The recipe event has fired!')

	// added to this list by Infinity_Broken
	// event.remove({output: 'minecraft:wooden_sword'})
	// event.remove({output: 'minecraft:diamond_sword'})
})